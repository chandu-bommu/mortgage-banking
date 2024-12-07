const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
  accountSummary: {
    // "accounts": [
    //   {
    //     "accountId": "12345",
    //     "accountType": "savings",
    //     "accountTitle": "My Savings Account",
    //     "accountNumber": "106000001",
    //     "currency": "SGD",
    //     "balance": 65000.00,
    //     "isPrimary": true,
    //     "lastTransactionDate": "2024-12-07"
    //   },
    //   {
    //     "accountId": "34567",
    //     "accountType": "mortgage",
    //     "accountTitle": "My Mortgage Account",
    //     "accountNumber": "1090000003",
    //     "currency": "SGD",
    //     "outstanding": 85000.00,
    //     "lastTransactionDate": "2024-12-08"
    //   }
    // ]
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
      };
    case "LOGIN_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: null,
      };
    case 'FETCH_ACCOUNT_SUMMARY_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ACCOUNT_SUMMARY_SUCCESS':
      return {
        ...state,
        loading: false,
        accountSummary: action.payload,
        error: null,
      };
    case 'FETCH_ACCOUNT_SUMMARY_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
