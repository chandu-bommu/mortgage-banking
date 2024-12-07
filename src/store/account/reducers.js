const initialState = {
  loading: false,
  error: null,
  accounts: [],
};

const accountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ACCOUNT_SUMMARY_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_ACCOUNT_SUMMARY_SUCCESS':
      return {
        ...state,
        loading: false,
        accounts: action.payload,
        error: null,
      };
    case 'FETCH_ACCOUNT_SUMMARY_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default accountsReducer;