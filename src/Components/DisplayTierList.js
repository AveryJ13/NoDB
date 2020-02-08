import React from 'react'
import EditPlayer from './EditPlayer'

function DisplayTierList(props) {

    const listDisplay = props.players.map(el => {
        return (<div>{el.name}
            <button onClick={() => { props.deletePlayer(el.id) }}>Delete</button>
            <EditPlayer editPlayer={props.editPlayer} id={el.id} name={el.name} />
        </div>)

    })


    return (
        <div>
            {listDisplay}
        </div>
    )
}

export default DisplayTierList