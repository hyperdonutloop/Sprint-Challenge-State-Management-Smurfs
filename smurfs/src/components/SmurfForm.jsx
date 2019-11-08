import React from 'react';
import { addSmurfs } from '../actions/index';
import { connect } from 'react-redux';

const AddSmurf = (props) => {
  const newSmurf = e => {
    e.preventDefault();
    props.addSmurfs();

  }
  return (
    <form>
      <label>New Smurf Information</label>
      <input
        type="text"
        name="name"
        placeholder="name"
      />
      <input
        type="text"
        name="age"
        placeholder="age"
      />
      <input
        type="text"
        name="height"
        placeholder="height"
      />
      <button onClick={newSmurf}>Submit</button>
    </form>
  )
}

// export default AddSmurf;

const mapStateToProps = state => ({
  smurfs: state.smurf,
  error: state.error,
})

export default connect(
  mapStateToProps,
  { addSmurfs }
)(AddSmurf);