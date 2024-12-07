import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountList from './AccountList';
import { Typography } from '@mui/material';

const ACCOUNT_TYPES = {
    savings: 'Savings',
    mortgage: 'Mortgages',
    creditCard: 'CreditCards'

}
const AccountSummary = ({ accountSummary }) => {

    const [accountGroups, setAccountsGroups] = useState({ savings: [], mortgage: [], creditCard: [] })

    useEffect(() => {
        if (accountSummary?.accounts)
            fetchAccountGroups(accountSummary.accounts);
    }, [accountSummary]);

    const fetchAccountGroups = (accounts) => {
        const tempAccounts = {};
        Object.keys(accountGroups)?.forEach((key) => {
            tempAccounts[key] = accounts.filter((acc) => acc.accountType === key);
        });
        setAccountsGroups(tempAccounts);
    }

    return (
        <div>
            {Object.entries(accountGroups)?.map(([key, value]) => (
                (value?.length > 0 ?
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography
                                component="span"
                                variant="h6"
                                sx={{ color: 'text.primary', display: 'inline' }}
                            >
                                {ACCOUNT_TYPES[key]}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <AccountList accounts={value} />
                        </AccordionDetails>
                    </Accordion> : null
                ))
            )}
        </div>
    );
};

export default AccountSummary;
