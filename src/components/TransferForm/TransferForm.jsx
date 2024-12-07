import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import React from 'react';

const TransferForm = () => {
    return (
        <Box>
            <Typography variant='h5' mb={2} mt={4}>Fund Transfer</Typography>
            <Grid2 container>
                <Grid2 size={{ sm: 12 }} mb={2}>
                    <TextField
                        fullWidth
                        select
                        id="fromAccount"
                        label="From Account"
                        variant="outlined"
                        disabled
                    />
                </Grid2>
                <Grid2 size={{ sm: 12 }} mb={2}>
                    <TextField
                        fullWidth
                        select
                        id="toAccount"
                        label="To Account"
                        variant="outlined"
                        disabled
                    />
                </Grid2>
                <Grid2 size={{ sm: 12 }} mb={2}>
                    <TextField
                        fullWidth
                        id="amount"
                        label="Amount"
                        variant="outlined"
                    />
                </Grid2>
                <Grid2 size={{ sm: 12 }} mb={2}>
                    <TextField
                        fullWidth
                        multiline
                        id="remarks"
                        label="Remarks"
                        variant="outlined"
                        rows={4}
                    />
                </Grid2>
                <Grid2 size={{ sm: 12 }} mb={2}>
                    <Button fullWidth variant="contained" >
                        Submit
                    </Button>
                </Grid2>
            </Grid2>
        </Box>
    );
};

export default TransferForm;
