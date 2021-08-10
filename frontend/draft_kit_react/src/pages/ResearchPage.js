import React, { Component } from 'react'
import Navbar from "../components/Navbar/Navbar";
import draftkitappAPI from '../api/draftkitappAPI.js'
import PlayerList from '../components/Lists/PlayerList.js'

class HomePage extends Component {
  state = {
    players: []
  }

  componentDidMount(){
    draftkitappAPI.fetchPlayers()
      .then((APIresponse) => {
        this.setState({
          players: APIresponse
          
        })
        console.log(this.state.players)
      }
    )
  }

  render() {
    return (
      <div>

        <div className="ResearchPage">
          <Navbar />
        </div>

        <div>
        <h1> All Players</h1>

          <div>
            <PlayerList players={this.state.players} />
          </div>
        
        </div>
      </div>
    )
  }
}

export default HomePage