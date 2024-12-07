import axios from 'axios';
import apiClient from '../api/client';

export const login = (customerId, password) => async (dispatch) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    try {
        // const response = await axios.post('http://localhost:3000/api/auth/login', {
        //   customerId,
        //   password,
        // });

        const response = {
            "status": "SUCCESS-CODE-001",
            "message": "Login successful",
            "data": {
                "accessToken": "token-value",
                "expiry": "2024-12-07 12:07:18.433049",
                "user": {
                    "id": "e7367a49-d74f-436a-8517-fb47ff335891",
                    "email": "testemail@test.com",
                    "firstName": "Test",
                    "lastName": "Usser"
                }
            }
        };

        localStorage.setItem('token', response.data.accessToken);

        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
    }
};

export const logout = () => {

    localStorage.removeItem('token');
    window.location.href = '/login';
};


export const fetchAccounts = () => async (dispatch) => {
    dispatch({ type: 'FETCH_ACCOUNT_SUMMARY_REQUEST' });
    try {
        // const response = await apiClient.get('/api/user/accounts');
        const response = {
            "status": "SUCCESS-CODE-002",
            "message": "test message",
            "data": {
                "accounts": [
                    {
                        "accountId": "12345",
                        "accountType": "savings",
                        "accountTitle": "My Savings Account",
                        "accountNumber": "106000001",
                        "currency": "SGD",
                        "balance": 65000.00,
                        "isPrimary": true,
                        "lastTransactionDate": "2024-12-07"
                    },
                    {
                        "accountId": "34567",
                        "accountType": "mortgage",
                        "accountTitle": "My Mortgage Account",
                        "accountNumber": "1090000003",
                        "currency": "SGD",
                        "outstanding": 85000.00,
                        "lastTransactionDate": "2024-12-08"
                    }
                ]
            }
        }
        dispatch({ type: 'FETCH_ACCOUNT_SUMMARY_SUCCESS', payload: response?.data });

    } catch (error) {
        dispatch({ type: 'FETCH_ACCOUNT_SUMMARY_FAILURE', payload: error.response?.message });
    }
};