const { hash256 } = require("../util/util");
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
    // to make thing simple and fast we use bits = 4
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
    //   console.log("Nonce:", this.nonce, "BlockHash:", this.blockHash);
    }
    console.log(this.blockHash);
  }
}

module.exports = {
  BlockHeader,
};
