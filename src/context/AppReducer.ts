// import { transaction } from "../types/types";
type transaction = {
    id: number;
    text: string;
    amount: number;
}


export default (state: any, action: any) => {
    switch(action.type) {
        case 'DEL_ITEM':
            return{
                ...state, 
                transactions: state.transactions.filter((transaction: transaction) => transaction.id !== action.payload)
            }
        case 'ADD_ITEM':
                return{
                    ...state, 
                    transactions:[action.payload, ...state.transactions]
                }
        default:
            return state;
    }
}