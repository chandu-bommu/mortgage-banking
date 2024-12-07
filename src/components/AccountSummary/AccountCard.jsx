import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'
import { Grid2 } from '@mui/material';

const AccountCard = ({ account }) => {
    return (
        <>
            <ListItem alignItems="flex-start" sx={{ borderBottom: 'darkgray 1px solid' }}>
                <ListItemText
                    primary={account.accountTitle}
                    secondary={
                        <React.Fragment>
                            <Grid2 container>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        {account.accountNumber}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span" sx={{ float: 'right', fontSize: '12px' }}>
                                        {(account?.accountType === "savings") ? "Balance" : "Outstanding"}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span" sx={{ float: 'right' }}>
                                        <Typography variant='subtitle2' display="inline" sx={{ fontSize: '12px', fontWeight: 800 }}>{account?.currency + ' '}</Typography>
                                        {(account?.accountType === "savings") ? account?.balance : account?.outstanding}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span"
                                        sx={{ float: 'right', fontSize: '10px' }}
                                        variant='caption'
                                    >
                                        <i>{`Last transaction: ${account?.lastTransactionDate}`}</i>
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </React.Fragment>
                    }
                />
            </ListItem>
        </>
    );
}
export default AccountCard;