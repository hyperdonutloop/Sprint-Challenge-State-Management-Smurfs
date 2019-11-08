import axios from "axios";

export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED';

export const getSmurfs = () => dispatch => {
  dispatch({type: FETCH_SMURF_LOADING });
  axios.get('http://localhost:3333/smurfs')
  .then(response => 
    dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data.results })
  )
    .catch(error => dispatch({ type: FETCH_SMURF_FAILED, payload: error }));
}