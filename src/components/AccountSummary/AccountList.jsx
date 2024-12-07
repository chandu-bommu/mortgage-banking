import * as React from 'react';
import List from '@mui/material/List';
import AccountCard from './AccountCard';
import { Divider } from '@mui/material';

const AccountList = () => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <AccountCard />
    </List>
  );
};
export default AccountList
