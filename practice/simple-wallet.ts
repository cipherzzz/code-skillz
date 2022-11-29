
let balance = 1000;
let transactions: Transaction[] = [];

export interface Transaction {
    from: string;
    to: string;
    amount: number;
}

export interface Wallet {
    address: string;
    balance: number;
    transactions: Transaction[];
    signTransaction: (transaction: Transaction) => Transaction;
    addTransaction: (transaction: Transaction) => void;
    send: (to: string, amount: number) => void;
    receive: (from: string, amount: number) => void;
    print: () => void;
}

const send = (to: string, amount: number) => {
    if(amount > balance) {
        console.log('Insufficient funds');
        return;
    }
    balance -= amount;
}

const receive = (from: string, amount: number) => {
    balance += amount;
}
    
const addTransaction = (transaction: Transaction) => {
    transactions.push(transaction);
}

const signTransaction = (transaction: Transaction): Transaction => {
    return transaction;
}

export const createWallet = (): Wallet => {
    return {
        address: '0x0000000000000000000000000000000000000000',
        balance,
        transactions,
        signTransaction,
        addTransaction,
        send,
        receive,
        print: function() {
            console.log(this.transactions);
        },
    };
}