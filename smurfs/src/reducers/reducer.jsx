import { 
  FETCH_SMURF_LOADING, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILED
} from '../actions/index';

const initialState = {
  smurf: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_LOADING:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        isFetching: false,
        error: ''
      };
      case FETCH_SMURF_FAILED:
        return {
          ...state,
          error: action.payload
        };

    default:
      return state
  }
}

export default reducer;