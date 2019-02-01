import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateSmurf } from '../actions/index'



class UpdateSmurf extends Component {

    constructor(props) {
        super(props)
        this.state = {
            age: '',
            height: '',
            name: ''
        }
    }
    componentDidMount() {
        const {smurf, match} = this.props
        const smurfs = smurf.find(smurfs => smurfs.id === Number(match.params.id))
        this.setState(smurfs)
    }

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.updateSmurf(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name='name' value={this.state.name} onChange={this.inputHandler} placeholder='Update Name' />
                <input type="number" name='age' value={this.state.age} onChange={this.inputHandler} placeholder='Update Age' />
                <input type="text" name='height' value={this.state.height} onChange={this.inputHandler} placeholder='Update Height' />
                <button type='submit'> Update Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        smurf: state.whackASmurf.smurfs
    }
}

export default connect(mapStateToProps, { updateSmurf: updateSmurf }) (UpdateSmurf)
