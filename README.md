## How to run this program

`npm install`
`node core/blockchain.js`

## What is this
It is a very basic implementation of how blockchain works, mainly how the bitcoin blockchain. It is easy as compared to Ethereum because ETH did more complex transactions as compared to Bitcoin. but the underlying tech is almost the same.

 the main part of a blockchain
- hash function `here we used sha256`
- block
- block header
- blockchain

### what is hash function
it generates the figerprint for your data for example
if data is "anish" => sha256("ansih") => 085e34e043a0cd8433abb5b780e37596a2578985d24bec4cefacfd9e32ba5bdb

sha256 is a really powerful cryptographic function that is used by Bitcoin as well

### Block
Block is used to contain the transaction data block. like
    - block height/block number
    - block size
    - block header

### Block header 
> it is something which contains all the info about the block like version, previous block hash, timestamp, `Markerl root`, and `bits`

Merkerl root is a combination of all transactions is a very easy  term 
watch this video for more info 
@ivan's https://www.youtube.com/watch?v=VkWiTvPnTcY

`bits` still in doubt @anni Bhai please explain

### now the blockchain
- inside block chain we have Genesis block aka the first block is a blockchain
- and add block function which is used to add block into the chain


watch this video for more understanding and python implementation
https://www.youtube.com/watch?v=K1hS1ire-Og





