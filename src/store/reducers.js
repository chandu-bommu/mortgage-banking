const initialState = {
    user: null,
    loading: false,
    error: null,
    accountSummary: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return { ...state, loading: true, error: null };
      case 'LOGIN_SUCCESS':
        return { ...state, loading: false, user: action.payload, error: null };
      case 'LOGIN_FAILURE':
        return { ...state, loading: false, error: action.payload };
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