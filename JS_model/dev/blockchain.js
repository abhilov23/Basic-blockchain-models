    const sha256 = require('sha256');
    
    function Blockchain(){
        this.chain = [];
        this.pendingTransactions = [];
        
        this.createNewBlock(100, '0', '0');

    }
    Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
        const newBlock = {
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.pendingTransactions,
            nonce: nonce,
            hash: hash, //for new hash
            previousBlockHash: previousBlockHash
        }
        this.PendingTransactions = [];
        this.chain.push(newBlock);

        return newBlock;
    }

    Blockchain.prototype.getLastBlock = function(){ // function for connecting last block
        return this.chain[this.chain.length - 1];
    }

    Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
     const newTransaction = {
        amount: amount,
        sender: sender,
        recipient: recipient
     };
     this.PendingTransactions.push(newTransaction);
     
     return this.getLastBlock()['index'] + 1;
    }

    Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce) {
      const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
      const hash = sha256(dataAsString);
      return hash;
    }

    Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
      //bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
      // => repetedly hash block until it finds correct data => 0000DVKDFJVKFJFKFDKNVDFKJ
      //uses current block data for the hash, but also the previousBlockHash
      // continuously changing nonce value until it finds the correct hash 
      // return to us the nonce value that creates the correct hash
      let nonce = 0;
      let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
      while(hash.substring(0,4) !== '0000'){
        nonce++;
        hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
        console.log(hash);  
    }
      return nonce;

    }






    module.exports = Blockchain;