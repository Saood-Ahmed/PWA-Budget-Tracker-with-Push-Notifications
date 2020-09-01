import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncExp = () => {
    const resource = useContext(GlobalContext);
    const { transactions } = resource.state; 

    const incomeAmounts = transactions.length > 0 ? transactions.map(item => item.amount > 0 ? item.amount: 0) : null;
    const totalIncome = incomeAmounts !== null ? incomeAmounts.reduce((prev: number, next: number) => prev + next) : 0;
 

    const expenseAmounts = transactions.length > 0 ? transactions.map(item => item.amount < 0 ? item.amount: 0) : null;
    const totalExpense = expenseAmounts !== null ? expenseAmounts.reduce((prev : number, next: number) => prev + next) : 0;
 
    return(
        <>
        <div className="row">
        <div className="six columns">
            <h4 style={{color:"red"}}>Income:</h4>
            <h4 style={{color:"red"}}>${totalIncome.toFixed(2)}</h4>
        </div>
        <div className="six columns">
            <h4 style={{color:"green"}}>Expense:</h4>
            <h4 style={{color:"green"}}>-${(totalExpense * -1).toFixed(2)}</h4>
        </div>
        </div>
        </>
    )
}

export default IncExp;