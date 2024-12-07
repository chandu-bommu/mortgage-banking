import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'
import { Grid2 } from '@mui/material';

const AccountCard = ({ type = "savings" }) => {
    return (
        <>
            <ListItem alignItems="flex-start" sx={{ borderBottom: 'darkgray 1px solid' }}>
                <ListItemText
                    primary="Savings Account"
                    secondary={
                        <React.Fragment>
                            <Grid2 container>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        0064542324
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span" sx={{ float: 'right', fontSize: '12px' }}>
                                        {(type === "savings") ? "Balance" : "Outstanding"}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span" sx={{ float: 'right' }}>
                                        <Typography variant='subtitle2' display="inline" sx={{ fontSize: '12px', fontWeight: 800 }}>SGD </Typography>
                                        {"85000"}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span"
                                        sx={{ float: 'right', fontSize: '10px' }}
                                        variant='caption'
                                    >
                                        <i>Last transaction: 0/12/2024</i>
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </React.Fragment>
                    }
                />
            </ListItem>
            {/* <ListItem alignItems="flex-start">
                <ListItemText
                    primary="Savings Account"
                    secondary={
                        <React.Fragment>
                            <Grid2 container>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        sx={{ color: 'text.primary', display: 'inline' }}
                                    >
                                        0064542324
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span" sx={{ float: 'right' }}>
                                        {(type === "savings") ? "Balance" : "Outstanding"}
                                    </Typography>
                                </Grid2>
                                <Grid2 size={{ xs: 12 }}>
                                    <Typography
                                        component="span" sx={{ float: 'right' }}>
                                        <Typography display="inline">SGD </Typography>
                                        {"85000"}
                                    </Typography>
                                </Grid2>
                            </Grid2>
                        </React.Fragment>
                    }
                />
            </ListItem> */}
        </>
    );
}
export default AccountCard;