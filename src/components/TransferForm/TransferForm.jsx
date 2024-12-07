import { Box, Button, Grid2, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

const ACCOUNT_MAP = {
    savings: 'fromAccount',
    mortgage: 'toAccount',
}

const TransferForm = () => {
    const initialFormState = { fromAccount: '', toAccount: '', amount: '', remarks: '' }
    const { accountSummary } = useSelector(state => state);
    const [formState, setFormState] = useState(initialFormState);
    const [formErrorState, setFormErrorState] = useState(initialFormState);
    const [accountsToTransfer, setAccountsToTransfer] = useState({});

    useEffect(() => {
        if (accountSummary?.accounts)
            fetchAccountsToTransfer(accountSummary.accounts);

    }, [accountSummary])

    const fetchAccountsToTransfer = (accounts) => {
        const tempAccounts = {};
        Object.entries(ACCOUNT_MAP)?.forEach(([key, value]) => {
            const tempKey = ACCOUNT_MAP[key];
            tempAccounts[tempKey] = accounts.filter((acc) => acc.accountType === key);
        });
        setAccountsToTransfer(tempAccounts);
        setFormState(prevState => ({
            ...prevState,
            fromAccount: tempAccounts['fromAccount'][0]?.accountNumber,
            toAccount: tempAccounts['toAccount'][0]?.accountNumber,
        }));
    }

    const handleFormValidation = () => {
        let formInvalid = false;
        if (formState?.amount === '') {
            setFormErrorState(prevState => ({
                ...prevState,
                amount: 'Transfer amount is required',
            }));
            formInvalid = true;
        }
        if (formState?.amount > accountsToTransfer?.fromAccount[0]?.balance) {
            setFormErrorState(prevState => ({
                ...prevState,
                amount: 'You don\'t have sufficient balance to transsfer',
            }));
            formInvalid = true;
        }
        return formInvalid;
    }

    const handleFormChange = (e) => {
        setFormState(prevState => ({
            ...prevState,
            [e?.target?.id]: e?.target?.value,
        }));
    }

    const handleSubmit = async () => {
        if (!handleFormValidation()) {
            setFormState(initialFormState);
            setFormErrorState(initialFormState);
            toastr.success('Fund transfer has been successfuly completed');
        }
    }

    return (
        <Box>
            <Typography variant='h5' mb={2} mt={4}>Fund Transfer</Typography>
            <Grid2 container>
                <TextField
                    fullWidth
                    id="fromAccount"
                    label="From Account"
                    variant="outlined"
                    disabled
                    value={formState?.fromAccount}
                    error={formErrorState?.fromAccount}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="toAccount"
                    label="To Account"
                    variant="outlined"
                    disabled
                    value={formState?.toAccount}
                    error={formErrorState?.toAccount}
                    helperText={formErrorState?.toAccount}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    id="amount"
                    label="Amount"
                    variant="outlined"
                    type="number"
                    value={formState?.amount}
                    error={formErrorState?.amount}
                    helperText={formErrorState?.amount}
                    onChange={handleFormChange}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    multiline
                    id="remarks"
                    label="Remarks"
                    variant="outlined"
                    rows={4}
                    value={formState?.remarks}
                    onChange={handleFormChange}
                    sx={{ mb: 2 }}
                />
                <Button fullWidth variant="contained" onClick={handleSubmit} >
                    Submit
                </Button>
            </Grid2>
        </Box>
    );
};

export default TransferForm;
