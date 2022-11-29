import { describe, it } from "mocha";
import { expect } from "chai";

import { Blockchain, createBlockchain, mineBlock } from "../blockchain";

describe("Blockchain", () => {
    it("should create a blockchain", () => {
        const blockchain = createBlockchain();
        expect(blockchain).to.exist;
    });
    it("should be able to add a block", () => {
        const blockchain = createBlockchain();
        expect(blockchain).to.exist;
        blockchain.addBlock([{ from: "foo", to: "bar", amount: 10 }]);
        expect(blockchain.blocks.length).to.equal(2);
    });
    it("should be able to verify a blockchain", () => {
        const blockchain = createBlockchain();
        expect(blockchain).to.exist;
        blockchain.addBlock([{ from: "foo", to: "bar", amount: 10 }]);
        expect(blockchain.verify()).to.equal(true);
    });
    it("should be able to verify a blockchain with invalid blocks", () => {
        const blockchain = createBlockchain();
        expect(blockchain).to.exist;
        blockchain.addBlock([{ from: "foo", to: "bar", amount: 10 }]);
        blockchain.blocks[1].previousHash = "invalid";
        expect(blockchain.verify()).to.equal(false);
    });
    it("should be able to mine a block", () => {
        const blockchain = createBlockchain();
        expect(blockchain).to.exist;
        blockchain.addBlock([{ from: "foo", to: "bar", amount: 10 }]);
        expect(blockchain.blocks[1].nonce).to.equal(0);
        mineBlock({ difficulty: 2, block: blockchain.blocks[1] });
        expect(blockchain.blocks[1].nonce).to.not.equal(0);
    });
});