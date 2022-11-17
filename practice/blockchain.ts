import { sha256 } from 'js-sha256';

interface Tx {
    from: string;
    to: string;
    amount: number;
}


interface Block {
    timestamp: number;
    data: Tx[];
    previousHash: string;
    hash: string;
    nonce: number;
}

interface Blockchain {
    blocks: Block[];
    addBlock: (data: Tx[]) => void;
    verify: ()=> boolean;
}

const createBlock = (input: {data: Tx[], previousHash: string}): Block => {
  let timestamp = Date.now();
  let data = input.data;
  let previousHash = input.previousHash;
  let nonce = 0;
  let hash = 'Not Mined Yet';
  return {
    timestamp,
    data,
    previousHash,
    hash,
    nonce,
  };
}

const createTx = (input: {from: string, to: string, amount: number}):Tx => {
    let from = input.from;
    let to = input.to;
    let amount = input.amount;
    return {
        from,
        to,
        amount,
    };
}

    
   const mineBlock = (input:{difficulty: number, block: Block}): Block => {
    let nonce = input.block.nonce
    let hash = input.block.hash
    const difficultyPrefix = () => {
        let str = '';
        for (let i = 0; i < input.difficulty; i++) {
            str += '0';
        }
        return str;
    }
    while (
        hash.substring(0, input.difficulty) !== difficultyPrefix()
    ) {
        nonce++;
        hash = sha256(input.block.timestamp + input.block.data.toString() + input.block.previousHash + nonce);
    }

    input.block.nonce = nonce
    input.block.hash = hash

    return input.block
  }


const createBlockchain = (): Blockchain => {
    const genesisBlock = createBlock({data: [], previousHash: ''})
    let blocks = [genesisBlock];

    const addBlock = (data: Tx[]) => {
        const previousHash = blocks[blocks.length - 1].hash;
        const block = createBlock({data, previousHash});
        blocks.push(block);
    }

    const verify = () => { 
        for (let i = 1; i < blocks.length; i++) {
            const currentBlock = blocks[i];
            const previousBlock = blocks[i - 1];
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }   
        return true;
    }
        
    return {
        blocks,
        addBlock,
        verify,
    }
}

const chain = createBlockchain();
chain.addBlock([createTx({from: 'a', to: 'b', amount: 10})]);

console.log(chain.verify());

console.log(mineBlock({difficulty: 1, block: chain.blocks[1]}));


