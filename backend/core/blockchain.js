const { hash256 } = require("../util/util");
const { BlockHeader } = require("./blockHeader");
const { Block } = require("./block");

const ZERO_HASH = "0".repeat(64);
const VERSION = 1;

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
