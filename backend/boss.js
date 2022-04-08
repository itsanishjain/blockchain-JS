/*
npm init
npm install js-sha256
node boss.js
*/
var sha256 = require("js-sha256");

function hash256(data) {
  return sha256(data);
}

const ZERO_HASH = "0".repeat(64);
const VERSION = 1;

// Block is a storage that contains the transaction data.
class Block {
  constructor(height, blockSize, blockHeader, transactionCount, transaction) {
    this.height = height;
    this.blockSize = blockSize;
    this.blockHeader = blockHeader;
    this.transactionCount = transactionCount;
    this.transaction = transaction;
  }
}

class BlockHeader {
  constructor(version, previousBlockHash, merkleRoot, timestamp, bits) {
    this.version = version;
    this.previousBlockHash = previousBlockHash;
    this.merkleRoot = merkleRoot;
    this.timestamp = timestamp;
    this.bits = bits;
    this.nonce = 0;
    this.blockHash = "";
  }

  mine() {
    // to make thing simple and fast we use leading 0s = 4 in actual bitcoin there is f#@king nineteen zeroes
    console.log("Mining a block...");
    while (this.blockHash.substring(0, 4) !== "0000") {
      this.blockHash = hash256(
        this.version.toString() +
          this.previousBlockHash.toString() +
          this.merkleRoot.toString() +
          this.timestamp.toString() +
          this.bits.toString() +
          this.nonce.toString()
      );
      this.nonce++;
    }
    console.log(this.blockHash);
  }
}

class BlockChain {
  constructor() {
    this.chain = [];
    this.genesisBlock();
  }

  // first block in a blockchain
  genesisBlock() {
    const blockHeight = 0;
    const prevBlockHash = ZERO_HASH;
    this.addBlock(blockHeight, prevBlockHash);
  }
  addBlock(blockHeight, prevBlockHash) {
    const timestamp = new Date().getTime();
    const transaction = `Anish sent ${blockHeight} Bitcoin to Joe`;
    // it is combined hash of all the transaction
    const merkleRoot = hash256(transaction);
    // bits is the target
    const bits = "ffff001f";
    const blockHeader = new BlockHeader(
      VERSION,
      prevBlockHash,
      merkleRoot,
      timestamp,
      bits
    );
    blockHeader.mine();
    const block = new Block(blockHeight, 1, blockHeader, 1, transaction);
    this.chain.push(block);
    console.log("Chain is:", this.chain);
  }

  main() {
    // set while  = 1 to only mine 1 blocks after genesis block
    let i = 1;
    while (i < 2) {
      const _blockHeight = this.chain[this.chain.length - 1]["height"] + 1;
      const _prevBlockHash =
        this.chain[this.chain.length - 1]["blockHeader"]["blockHash"];
      this.addBlock(_blockHeight, _prevBlockHash);
      i++;
    }
  }
}

const blockchain = new BlockChain();
blockchain.main();
