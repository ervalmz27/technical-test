# Turbo Monorepo Setup and Usage Guide
Web Application Login

- Username: slayrungkad@gmail.com
- Password: slay77

## Prerequisites
- Node.js (v18 or later)
- npm (v8 or later)

- **First Run  Mode**
```bash
npm run install 
```
- **Run Development Mode**
```bash
npm run dev
```

- **Lint All Packages**
```bash
npm run lint
```

- **Run Tests**
```bash
npm run test
```

## Best Practices
- Use workspace dependencies
- Share configurations
- Leverage Turbo's caching
- Keep packages independent

## Troubleshooting
- Ensure Node.js and npm are updated
- Clear Turbo cache: `npx turbo clean`
- Check `turbo.json` configuration

## Resources
- [Turbo Documentation](https://turbo.build/repo/docs)
- [npm Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces)