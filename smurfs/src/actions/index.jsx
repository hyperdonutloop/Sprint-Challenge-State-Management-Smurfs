import axios from "axios";

export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILED = 'FETCH_SMURF_FAILED';

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURF_LOADING });
  axios
    .get('http://localhost:3333/smurfs')
    .then(response => dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data }))
    .catch(error => dispatch({ type: FETCH_SMURF_FAILED, payload: error }));
}

export const GET_SMURF_LOADING = 'GET_SMURF_LOADING';
export const GET_NEW_SMURF = 'GET_NEW_SMURF';
export const GET_NEW_SMURF_FAILED = 'GET_NEW_SMURF_FAILED';

export const addSmurfs = (newSmurf) => dispatch => {
  dispatch({type: GET_SMURF_LOADING});
  axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then(response => console.log(response.data))
    .catch(error => console.log(error.response))
}
