import React,{ createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import { transaction } from '../types/types';

interface State {
    transactions: transaction[];
  }
  
  interface GlobalContextType {
    add(transaction: transaction): void;
    del(id: number): void;
    state: State;
  }
  

const initialState: State = {
    transactions: [
        {id:1, text:'Salary', amount: 200},
        {id:2, text:'Bought Shoes', amount: -150}
    ]
}

export const GlobalContext = createContext<GlobalContextType>(undefined as any);

    

export const GlobalProvider  = (props: any) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // function del (id: number):void{
    //     dispatch({
    //         type:'DEL_ITEM',
    //         payload:id
    //     })
    // };
    // function add (item: transaction):void{
    //     dispatch({
    //         type:'ADD_ITEM',
    //         payload:item
    //     })
    // }

    return(
        <GlobalContext.Provider value={{
            state,
            add(transaction) {
              dispatch({ type: "ADD_ITEM", payload: transaction });
            },
            del (id){
                dispatch({type:'DEL_ITEM', payload:id })
            }
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}