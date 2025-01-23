import { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {AppDispatch}  from '@/store/store';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import {  setLoading, setError, setData } from '@/store/actions';
import { userApi } from '@/apis/userApi';
import  { RootState } from '@/store/store';

import {UpdateDataButton} from './UpdateButton';


export default function UserList() {
  const dispatch: AppDispatch = useDispatch();

  const { data, loading, error } = useSelector(
    (state: RootState) => state
  );

  useEffect(() => {
    
    fetchUsers();
  }, [dispatch]);

  const fetchUsers = async () => {
    dispatch(setLoading(true));
    try {
      const dataUsers = await userApi.ApisAllUsers();
  
      dispatch(setData(dataUsers));
    } catch (err) {
      dispatch(setError(err instanceof Error ? err.message : 'An error occurred while fetching users'));
    }
  };
  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }
  const formatFirestoreTimestamp = (timestamp: { _seconds: number; _nanoseconds: number }) => {
    if (!timestamp || !timestamp._seconds) return 'Invalid date';
    
    const milliseconds = timestamp._seconds * 1000 + timestamp._nanoseconds / 1000000;
    return new Date(milliseconds).toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };
  


  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data ? data.map((user:any,index:any) => (
            <TableRow key={index}>
              <TableCell>{user.firstname + ' ' + user.lastname}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                {formatFirestoreTimestamp(user.createdAt)}
              </TableCell>
              <TableCell>
                <UpdateDataButton  dataUsers={user} refreshData={fetchUsers} />
                </TableCell>
            </TableRow>
          )) : <TableRow>
          <TableCell colSpan={3}>
              <Typography color='red'>No users found</Typography>
          </TableCell>
          </TableRow>}

        </TableBody>
      </Table>
    </TableContainer>

  );
}
