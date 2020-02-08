import React, {Component} from 'react'

class PlayerStat extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <button onClick = {this.props.getSelectedPlayer()}>Get Individual Status</button>
            </div>
        )
    }
}

export default PlayerStat