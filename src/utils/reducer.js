export const initialState = {
  userData: null,
  userRepos: [],
  error: null,
  loading: false,
  hasMore: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_USER_DATA":
      return {
        ...state,
        userData: action.payload.userData,
        userRepos: action.payload.userRepos,
        hasMore: action.payload.userRepos.length > 0,
        error: null,
      };
    case "LOAD_MORE_REPOS":
      return {
        ...state,
        userRepos: [...state.userRepos, ...action.payload.userRepos],
        hasMore: action.payload.userRepos.length > 0,
        loading: false,
        error: null,
      };
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload.error,
        loading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};
