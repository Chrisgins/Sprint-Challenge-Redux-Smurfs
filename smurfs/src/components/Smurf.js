import React from "react";
import {connect} from 'react-redux'
import {deleteSmurf} from '../actions/index'
import {Link } from 'react-router-dom'

const Smurf = ({ smurfs, deleteSmurf }) => {

    const clickHandler = () => {
        deleteSmurf (smurfs.id)
    }
return (
    <div key={smurfs.id} className="character-card">
    <p className="btn" onClick={clickHandler}>
        <button>DELETE ME </button>
    </p>
        <h2>{smurfs.name}</h2>
        <p>Age:{smurfs.age}</p>
        <p>Height:{smurfs.height}</p>
        <Link to={`/update/${smurfs.id}`} style={{ textDecoration: 'none', color: 'blue', cursor: 'pointer' }}>Update This Smurf</Link>
    </div>
   );
};

const mapStateToProps = () =>({})

export default connect(mapStateToProps, {deleteSmurf})(Smurf);
