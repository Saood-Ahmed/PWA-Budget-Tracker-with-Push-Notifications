export type transaction = {
    id: number;
    text: string;
    amount: number;
}

export type delTransaction = (id: number) => void

export type addTransaction = (item: transaction) => void