import React, { Component } from 'react'

class EditPlayer extends Component {

    constructor(props) {
        super(props)


        this.state = {
            input: '',
            toggle: false
        }


    }
    handleChange = (e) => {
        this.setState({ input: e })
    }

    toggleEdit = () => {
        this.setState({
            toggle: !this.toggle
        })
    }

    render() {
        return (
            <div>
                {this.state.toggle ? (<div>
                    <input onChange={(e) => this.handleChange(e.target.value)}></input>
                    <button
                        onClick={() => {
                            this.props.editPlayer(this.props.id, this.state.input);
                            this.toggleEdit()
                        }}>Confirm</button>
                </div>
                ) : (
                        <button onClick={() => this.toggleEdit()}>Edit</button>
                    )}

            </div>
        )
    }



}
export default EditPlayer
