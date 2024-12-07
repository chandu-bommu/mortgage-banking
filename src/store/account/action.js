import apiClient from '../../api/client';

export const fetchAccounts = (customerId, password) => async (dispatch) => {
    dispatch({ type: 'FETCH_ACCOUNT_SUMMARY_REQUEST' });
    try {
        const response = await apiClient.get('/api/user/accounts');
        dispatch({ type: 'FETCH_ACCOUNT_SUMMARY_SUCCESS', payload: response?.data });

    } catch (error) {
        dispatch({ type: 'FETCH_ACCOUNT_SUMMARY_FAILURE', payload: error.response?.message });
    }
};