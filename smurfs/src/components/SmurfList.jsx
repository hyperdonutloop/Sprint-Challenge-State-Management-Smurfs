import React, { useEffect } from 'react';
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

// SECOND ATTEMPT BELOW HERE
// const SmurfList = ({smurfs, fetchSmurfs}) => {
//   useEffect(() => {
//     fetchSmurfs()
//   }, [fetchSmurfs]);

//   return (
//     <div>
//       {smurfs.smurf.map(item => (
//         <SmurfDetails key={item.id} smurf={item} />
//       ))}
//     </div>
//   );
// }

// function SmurfDetails({smurf}) {
//   const { age, height, name } = smurf;
//   return (
//     <div>
//       <h1>{name}</h1>
//       <p>Age: {age}</p>
//       <p>Height: {height}</p>
//     </div>
//   )
// }

// const mapStateToProps = state => {
//   return {smurfs: state.smurf}
// }

// const mapDispatchToProps = {
//   getSmurfs
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);