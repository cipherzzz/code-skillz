package main

import (
	"crypto/sha256"
	"fmt"
	"time"
)

type Block struct {
	timestamp    time.Time
	transactions []string
	previousHash []byte
	hash         []byte
}

func NewBlock(transactions []string, previousHash []byte) *Block {
	currentTime := time.Now()
	return &Block{
		timestamp:    currentTime,
		transactions: transactions,
		previousHash: previousHash,
		hash:         GenerateHash(transactions, currentTime, previousHash),
	}
}

func GenerateHash(transactions []string, time time.Time, previousHash []byte) []byte {
	input := append(previousHash, time.String()...)
	for _, transaction := range transactions {
		fmt.Println(transaction)
		input = append(input, transaction...)
	}
	hash := sha256.Sum256(input)
	return hash[:]
}

func printBlockInformation(block *Block) {
	fmt.Printf("\ttime: %s\n", block.timestamp.String())
	fmt.Printf("\tprevHash: %x\n", block.previousHash)
	fmt.Printf("\tHash: %x\n", block.hash)
	printTransactions(block)
}

func printTransactions(block *Block) {
	fmt.Println("\tTransactions:")
	for i, transaction := range block.transactions {
		fmt.Printf("\t\t%v: %q\n", i, transaction)
	}
}

func main() {
	// Create a new block
	genesis := NewBlock([]string{"Transaction 1", "Transaction 2"}, []byte{})
	printBlockInformation(genesis)

	secondBlock := NewBlock([]string{"Transaction 3", "Transaction 4"}, genesis.hash)
	printBlockInformation(secondBlock)

}
