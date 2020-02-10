import React, { Component } from 'react';
import Header from './Components/Header'
import CreatePlayerCards from './Components/CreatePlayerCards'
import DisplayTierList from './Components/DisplayTierList'
import PlayerStat from './Components/PlayerStat'
import './App.css';
import axios from 'axios'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      aTier: [],
      bTier: [],
      cTier: [],
      worstTier: [],
      players: [],
      selectedPlayer: {}
    }
  }


  getStat = () => {
    axios.get('/api/tier-list').then(response => {
      this.setState({ players: response.data })
    })

  }

  getSelectedPlayer = (id) => {
    this.state.players.forEach(element => {
      if (element.id === +id) {
        this.setState({ selectedPlayer: element })
      }
    })
  }

  addPlayer = (newPlayer) => {
    if (newPlayer === '') {
      alert('Please enter something into the list')
    } else {
      axios.post('/api/tier-list', { player: newPlayer }).then(response => {
        this.setState({ players: response.data })
      }).catch(() => console.log('Error Out'))
    }
  }
  editPlayer = (id, name) => {
    console.log(name)
    axios.put(`/api/tier-list/${id}`, { name: name }).then(res => {
      this.setState({ players: res.data })
    }).catch(() => console.log('Error Out'))
  }
  editTierPlayer = () => {

  }
  deletePlayer = (id) => {
    let bool = window.confirm('Are you Sure?')
    if (bool) {
      axios.delete(`/api/tier-list/${id}`).then(res => {
        this.setState({ players: res.data })
      })
    }

  }
  componentDidMount() {
    this.getStat()

  }
  render() {

    return (
      <div className='App'>
        <Header />
        <CreatePlayerCards addPlayer={this.addPlayer} />
        <DisplayTierList players={this.state.players} deletePlayer={this.deletePlayer} editPlayer={this.editPlayer} />
      </div>
    )
  }


}

export default App;
