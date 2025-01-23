import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  {AppDispatch}  from '@/store/store';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Alert,
  CircularProgress
} from '@mui/material';
import { setLoading, setData, setError } from '../store/actions';
import { userApi } from '@/apis/userApi';
import type { RootState } from '../store/store';
import { User } from '@/store/types';


interface UpdateDataButtonProps {
  dataUsers: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  };
  refreshData: () => void;
}

export  const UpdateDataButton =({ dataUsers,refreshData }: UpdateDataButtonProps) => {
   const dispatch: AppDispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.data);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<any|null>({
    firstname: '',
    lastname: '',
    email: ''
  });

  const handleOpen = () => {
    setFormData({
      firstname: dataUsers.firstname,
      lastname: dataUsers.lastname,
      email: dataUsers.email
    });
    setOpen(true);
  };

  const handleClose = () => {
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
    });
    setOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev:any) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async () => {
    dispatch(setLoading(true));
    try {
      const updatedData = await userApi.updateUserData(dataUsers.id, formData);
      dispatch(setData(updatedData));
      refreshData();
      handleClose();
    } catch (err) {
      dispatch(setError(err instanceof Error ? err.message : 'An error occurred while updating'));
    }
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        color="primary"
      >
        Update Data
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Update User Data</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 2 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            
            <TextField
              name="firstname"
              label="First Name"
              fullWidth
              value={formData.firstname}
              onChange={handleChange}
              disabled={loading}
            />
            
            <TextField
              name="lastname"
              label="Last Name"
              fullWidth
              value={formData.lastname}
              onChange={handleChange}
              disabled={loading}
            />
            <TextField
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </Stack>
        </DialogContent>
        
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>
            Cancel
          </Button>
          <Button 
            onClick={handleUpdate} 
            variant="contained" 
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? 'Updating...' : 'Update'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
