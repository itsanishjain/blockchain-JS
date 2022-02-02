class Block {
  // Block is used to contains the transaction data block.
  constructor(height, blockSize, blockHeader, transactionCount, transaction) {
    this.height = height;
    this.blockSize = blockSize;
    this.blockHeader = blockHeader;
    this.transactionCount = transactionCount;
    this.transaction = transaction;
  }
}

module.exports = {
  Block,
};
