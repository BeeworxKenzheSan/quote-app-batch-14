import { QUOTES_TYPES } from "../../utils/constants";

const initialState = {
  isLoading: false,
  error: null,
  quotes: [],
  quote: null,
};
export const quoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUOTES_TYPES.IS_LOADING: {
      return { ...state, isLoading: true };
    }
    case QUOTES_TYPES.GET: {
      return { ...state, isLoading: false, quotes: action.payload };
    }
    case QUOTES_TYPES.ERROR: {
      return { ...state, isLoading: false, error: action.payload };
    }
    case "stop_loading": {
      return { ...state, isLoading: false };
    }
    case QUOTES_TYPES.GET_BY_ID: {
      return { ...state, isLoading: false, quote: action.payload };
    }
  }
  return state;
};
