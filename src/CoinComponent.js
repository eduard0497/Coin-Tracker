import React from 'react';
import './CoinComponent-CSS.css';

const CoinComponent = ({image,
    name,
    symbol,
    current_price,
    market_cap,
    price_change_percentage_24h,
    total_volume}) => {

    return (

        <div className='coin__row'>
            <div className='row__image'>
                <img src={image} alt="Coin Icon"/>      
            </div>

            <h5 className='row__name'>
            {name}
            </h5>

            <h6 className='row__symbol'>
            {symbol}
            </h6>

            <p className='row__price'>
            ($){current_price}
            </p>

            <p className='row__mCap'>
            MCap: {market_cap}
            </p>

            {
            price_change_percentage_24h <= 0 
            ?
            <p className='change__red'>
            Change(%): {price_change_percentage_24h}
            </p>
            :
            <p className='change__green'>
            Change(%): {price_change_percentage_24h}
            </p>
            }

            <p className='row__volume'>
            Volume: {total_volume}
            </p>

        </div>

    )
}

export default CoinComponent;