import axios from 'axios';

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