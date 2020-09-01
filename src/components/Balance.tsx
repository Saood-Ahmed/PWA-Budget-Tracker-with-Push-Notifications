import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const Balance = () => {
    const resource = useContext(GlobalContext);
    const { transactions } = resource.state;

    const balance = transactions.map(item => item ? item.amount : 0);
    const totalBalance = balance.length > 0 ? balance.reduce((prev, second) => prev+second).toFixed(2) : 0;

    return(
        <div>
            <h4>Balance:</h4>
            <h4>${totalBalance}</h4>
        </div>
    )
}

export default Balance;