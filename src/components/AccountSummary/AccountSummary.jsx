import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountList from './AccountList';

const AccountSummary = () => {
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    Savings
                </AccordionSummary>
                <AccordionDetails>
                    <AccountList />
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    Loans
                </AccordionSummary>
                <AccordionDetails>
                    <AccountList />
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default AccountSummary;
