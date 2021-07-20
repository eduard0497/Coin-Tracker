import React, { Component } from 'react';
import CoinComponent from './CoinComponent.js';
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false

class App extends Component {
    constructor() {
        super();

        this.state = {
            coinData: [],
            search: ''
        }
    }

    async componentDidMount() {
        await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(response => response.json())
            .then(data => {
                this.setState((prevState, prevProps) => ({ coinData: data }))
            }).catch(err => console.log(err))

        console.log(this.state.coinData)

    }

    handleChange = (e) => {
        this.setState({ search: e.target.value })
    }

    filteredCoins = (coins) => (
        coins.filter(coin => 
            coin.name.toLowerCase().includes(this.state.search.toLowerCase())
        )
    )


    render() {
        return (

            <div className='app__container'>

              <div className='app__title'>
                <h1>Live Coin Data</h1>
              </div>

              <div className='app__searchContainer'>
                <input 
                  onChange={this.handleChange}
                  className='searchContainer__searchField'
                  type='text' 
                  placeholder='Search...'
                />
              </div>

              <div className='app__coinList'>
                {this.filteredCoins(this.state.coinData).map(coin => (
                  <CoinComponent
                      key={coin.id}
                      image={coin.image}
                      name={coin.name}
                      symbol={coin.symbol.toUpperCase()}
                      current_price={coin.current_price}
                      market_cap={coin.market_cap.toLocaleString()}
                      price_change_percentage_24h={coin.price_change_percentage_24h.toFixed(2)}
                      total_volume={coin.total_volume.toLocaleString()}
                  />
                  
                ))}
              </div>

            </div>


        )
    }
}


export default App;