import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {
    const resource = useContext(GlobalContext);
    const { transactions } = resource.state;

    return (
        <div className="container" style={{textAlign:"left"}}>
            <table className="container">
                <tr>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th></th>
                </tr>
            
            {transactions.length > 0 ? (transactions.map((item ) => (
                <tr key = {item.id}>
                    <td><h4>{item.text}</h4></td>
                    <td><h4>{item.amount}</h4></td>
                    <td><h4>{item.amount > 0 ? 'Income':'Expense'}</h4></td>
                    <td><button style={{backgroundColor:"red", color:"white"}} onClick={() => resource.del(item.id)}>Delete Transaction</button></td>
                
                </tr>
            ))) : 'No Transactions'}
            </table>
        </div>
    )
}

export default Transactions;