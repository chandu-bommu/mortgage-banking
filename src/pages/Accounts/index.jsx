import React, { useEffect } from 'react';
import AccountSummary from '../../components/AccountSummary/AccountSummary';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAccounts } from '../../store/action';

const Accounts = () => {
    const { accountSummary } = useSelector(state => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAccounts())
    }, []);


    return (
        <AccountSummary accountSummary={accountSummary} />
    );
};

export default Accounts;
