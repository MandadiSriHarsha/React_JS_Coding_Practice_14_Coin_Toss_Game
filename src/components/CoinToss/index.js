import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        tails: prevState.tails,
        coinImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads,
        tails: prevState.tails + 1,
        coinImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, coinImage} = this.state
    return (
      <div className="coin-toss-bg-container">
        <div className="toss-card">
          <h1 className="toss-card-heading">Coin Toss Game</h1>
          <p className="toss-card-description">Heads (or) Tails</p>
          <img src={coinImage} className="toss-card-image" alt="toss result" />
          <button
            type="button"
            className="toss-card-button"
            onClick={this.tossCoin}
          >
            Toss Coin
          </button>
          <div className="toss-card-count-card">
            <p className="total-tosses">Total: {total}</p>
            <p className="heads-tosses">Heads: {heads}</p>
            <p className="tails-tosses">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
