import * as React from 'react';
import List from '@mui/material/List';
import AccountCard from './AccountCard';

const AccountList = ({ accounts }) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {accounts?.map((account, index) => (
        <AccountCard key={account.accountType.concat('_', index)} account={account} />
      ))
      }
    </List>
  );
};
export default AccountList
