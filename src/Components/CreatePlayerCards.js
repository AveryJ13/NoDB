import React, {Component} from 'react'

class CreatePlayerCards extends Component{
    constructor(props){
        super(props)
        this.state= {
            input: ''
        }

    }

    handleChange = (val) =>{
        console.log(val)
        this.setState({input: val})
        
    }

    render(){
        return(
            <div>
                <input onChange = {(e) => {this.handleChange(e.target.value)}}></input>
                <button onClick = {() => this.props.addPlayer(this.state.input)}>Activate</button>
            </div>
        )
    }

}

export default CreatePlayerCards