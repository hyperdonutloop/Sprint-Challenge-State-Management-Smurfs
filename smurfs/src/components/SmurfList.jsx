import React from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';

const SmurfList = props => {
  const fetchSmurfs = e => {
    e.preventDefault();
    props.getSmurfs();
  };

  return (
    <>
    <h1>Welcome to Smurf World</h1>
    <button onClick={fetchSmurfs}>Get Some Smurfs</button>
    <ul>
      {props.smurfs.map(smurf => (
        <li key={smurf.id}>
          <h3>Name: {smurf.name}</h3>
          <p>Age: {smurf.age}</p>
          <p>Height: {smurf.height}</p>
        </li>
      ))}
    </ul>
    </>
  )
}

// export default SmurfList;

const mapStateToProps = state => ({
  smurfs: state.smurf,
  error: state.error,
  isFetching: state.isFetching
})

export default connect(
  mapStateToProps,
  { getSmurfs }
)(SmurfList);