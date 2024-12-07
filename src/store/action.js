<<<<<<< Updated upstream
import axios from 'axios';
import apiClient from '../api/client';
=======
import axios from "axios";
>>>>>>> Stashed changes

export const login = (customerId, password) => async (dispatch) => {
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    // Get all users from json-server
    const response = await axios.get("http://localhost:5000/users");
    const user = response.data.find(
      (user) =>
        user.customerId === customerId && user.password === password,
    );

    if (user) {
      localStorage.setItem("token", user.accessToken);
      dispatch({ type: "LOGIN_SUCCESS", payload: { user: user.user } });
    } else {
      dispatch({ type: "LOGIN_FAILURE", payload: "Invalid credentials" });
    }
<<<<<<< Updated upstream
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
=======
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error.message });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: "LOGOUT" });
};

export const fetchAccountSummary = () => async (dispatch) => {
  dispatch({ type: "FETCH_ACCOUNT_SUMMARY_REQUEST" });
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get("/account-summary", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch({
      type: "FETCH_ACCOUNT_SUMMARY_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "FETCH_ACCOUNT_SUMMARY_FAILURE",
      payload: error.message,
    });
  }
>>>>>>> Stashed changes
};