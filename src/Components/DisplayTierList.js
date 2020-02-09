import React from 'react'
import EditPlayer from './EditPlayer'
import '../App.css'
function DisplayTierList(props) {

    const listDisplay = props.players.map(el => {
        return (<div className='buttonStacking'>{el.name}
            <button className='deleteButton' onClick={() => { props.deletePlayer(el.id) }}>Delete</button>
            <EditPlayer editPlayer={props.editPlayer} id={el.id} name={el.name} />
        </div>)

    })


    return (
        <div className='parent'>
            <div className='alignButtons'>
                {listDisplay}
            </div>
        </div>
    )
}

export default DisplayTierList