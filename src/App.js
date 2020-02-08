import React, {Component} from 'react';
import Header from './Components/Header'
import CreatePlayerCards from './Components/CreatePlayerCards'
import DisplayTierList from './Components/DisplayTierList'
import PlayerStat from './Components/PlayerStat'
import './App.css';
import axios from 'axios'


class App extends Component{

  constructor(props){
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
      this.setState({players: response.data})
    })
    
  }

  getSelectedPlayer = (id) => {
    this.state.players.forEach(element => {
      if (element.id === +id){
        this.setState({selectedPlayer: element})
      }
    })
  }

  addPlayer = (newPlayer) => {
    axios.post('/api/tier-list', {player: newPlayer}).then(response => {
      this.setState({players: response.data})
    })
  }
  editPlayer = (id, name) => {
    console.log(name)
    axios.put(`/api/tier-list/${id}`, {name: name}).then(res => {
      this.setState({players: res.data})
    })
  }
  editTierPlayer = () => {

  }
  deletePlayer = (id) => {
    axios.delete(`/api/tier-list/${id}`).then(res => {
      this.setState({players: res.data})
    })
  }
  componentDidMount() {
  this.getStat()
  
  }
  render(){
    
    return(
      <div className = 'App'>
        <Header />
        <CreatePlayerCards addPlayer = {this.addPlayer}/>
        <DisplayTierList players = {this.state.players} deletePlayer = {this.deletePlayer} editPlayer = {this.editPlayer}/>
        <PlayerStat getSelectedPlayer = {this.getSelectedPlayer}/>
      </div>
    )
  }


}

export default App;
