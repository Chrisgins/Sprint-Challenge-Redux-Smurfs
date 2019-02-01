import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addSmurf } from '../actions/index'



class AddSmurf extends Component {

    constructor (props) {
        super(props)
        this.state = {
            age: '',
            height: '',
            name: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            age: '',
            name: '',
            height: '',
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="text" name='name' value={this.state.name} onChange={this.inputHandler} placeholder='Add Name' />
                <input type="number" name='age' value={this.state.age} onChange={this.inputHandler} placeholder='Add Age' />
                <input type="text" name='height' value={this.state.height} onChange={this.inputHandler} placeholder='Add Height' />
                <button type='submit'>Add Smurf</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

export default connect(mapStateToProps, {addSmurf : addSmurf}) (AddSmurf)
