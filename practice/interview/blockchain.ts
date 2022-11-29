import {sha256} from "js-sha256";


// Blockchain consists of a series of block headers, indexed by hash.
type BlockChain = {
    blocks: { [hash: string]: BlockHeader }
};

// Block header consists of:
// (1) the hash of the previous block header;
// (2) the Merkle root of transactions in the block.
type BlockHeader = {
    prevHash: string,
    merkleRoot: string
};

// Tx is arbitrary data.
type Tx = {
    data: Uint8Array;
}

function txRoot(txs: Array<Tx>): string {
    return "root";
}

const hash = (header: string) => {
    return sha256(header);
}

// 1. Complete the structs for Blockchain and BlockHeader.

// 2. Pseudo code a function to generate BlockHeader from the hash of a previous
// block header, and an array of transactions. Assume the provided `txRoot` function
// gives you a valid TransactionRoot

const generateBlockHeader = (prevBlockHeader: string, txs: Array<Tx>): BlockHeader => {
    return {
        prevHash: hash(prevBlockHeader),
        merkleRoot: txRoot(txs)
    }
}


// 3. Code a function to initialise a new Blockchain.

const initBlockchain = (): BlockChain => {

    const genesisBlockHeader = {    
        prevHash: "0",  
        merkleRoot: "0"
    }

    const genesisHash = hash(genesisBlockHeader)

    return {
        blocks: {genesisHash: genesisBlockHeader}
    }
}

// 4. Code a function to add a new block header to a blockchain.

const addBlock = (blockchain: BlockChain, transactions:[Tx]): BlockChain => {

    const prevBlockHeader = blockchain.blocks[blockchain.blocks.length - 1]

    const newBlockHeader = generateBlockHeader(prevBlockHeader, transactions)

    const newHash = hash(newBlockHeader)

    blockchain.blocks[newHash] = newBlockHeader

    return blockchain
}

// 5. Create a blockchain with two blocks.
const blockchain = initBlockchain()
addBlock(blockchain, [{data: Uint8Array.from([1,2,3])}])