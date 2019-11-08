import { 
  FETCH_SMURF_LOADING, 
  FETCH_SMURF_SUCCESS, 
  FETCH_SMURF_FAILED,
  GET_NEW_SMURF
} from '../actions/index';

const initialState = {
  smurf: [],
  error: null,
  isFetching: false
};

function reducer(state = initialState, action) {
  console.log('reducer', action)
  switch (action.type) {
    case FETCH_SMURF_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurf: action.payload,
        isFetching: false,
        error: null
      };
      case FETCH_SMURF_FAILED:
        return {
          ...state,
          error: action.payload
        };
      case GET_NEW_SMURF:
        return {
          ...state,
          smurf: action.payload
        }
    default:
      return state
  }
}

export default reducer;