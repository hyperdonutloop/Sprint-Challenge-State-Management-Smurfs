import React, { useState } from 'react';
import { addSmurfs } from '../actions/index';
import { connect } from 'react-redux';

const SmurfForm = (props) => {
  const [values, setValues] = useState({
    // id: props.smurfs[props.smurfs.length -1].id +1,
    name: '',
    age: '',
    height: ''
  })

  const handleChange = e => setValues({...values, [e.target.name]: e.target.value});
  
  const handleSubmit = async e => {
    e.preventDefault();
    await props.addSmurfs(values);
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>New Smurf Information</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="name"
        value={values.name}
      />
      <input
        type="text"
        name="age"
        onChange={handleChange}
        placeholder="age"
        value={values.age}
      />
      <input
        type="text"
        name="height"
        onChange={handleChange}
        placeholder="height"
        value={values.height}
      />
      <button>Submit</button>
    </form>
  )
}

// export default AddSmurf;

const mapStateToProps = state => ({
  smurfs: state.smurf.smurf
})

const mapDispatchToProps ={addSmurfs}

export default connect(mapStateToProps,mapDispatchToProps)(SmurfForm);