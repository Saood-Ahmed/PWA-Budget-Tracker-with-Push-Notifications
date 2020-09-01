import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState('0');

    const resource = useContext(GlobalContext);
    const { add } = resource;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        
        const id =  Math.floor((1 + Math.random()) * 10000);

        const newItem = {
            id,
            text,
           amount : +amount
        }
        add(newItem);

    }

    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                <label htmlFor="Name">Name Of Transaction:</label>
                <input className="u-full-width" type="text" value={ text } onChange={(e) => setText(e.target.value)}/>
                <label htmlFor="Name">Amount Of Transaction:</label>
                <input className="u-full-width" type="text" value={ amount } onChange={(e) => setAmount(e.target.value)}/><br></br>
                <button className="button-primary" type='submit'>Add Transaction</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransaction;