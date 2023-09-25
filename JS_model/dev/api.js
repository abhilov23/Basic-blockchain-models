const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Blockchain = require('./blockchain'); //we are going to use blockchain constructor function
const uuid = require('uuid');

const nodeAddress = uuid.v1().split('-').join('');


const bitcoin = new Blockchain(); //and we are going to call our constructor function bitcoin


app.use(bodyParser.json()); // they are parsing data, so that we can access any one of them in the code
app.use(bodyParser.urlencoded({extended: false}));

app.get('/blockchain', function (req, res) {
  res.send(bitcoin);
})

app.post('/transaction', function(req, res){
      const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient); 
      res.json({ note: `Transaction will be added in block ${blockIndex}.`});
});

app.get('/mine', function(req, res){
  const lastBlock = bitcoin.getLastBlock();
  const previousBlockHash = lastBlock['hash'];
  const currentBlockData = {
    transactions:bitcoin.pendingTransactions,
    index: lastBlock['index'] + 1
  };
  const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
  const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    bitcoin.createNewTransaction(12.5, "00", );

     const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
     res.json({
      note:"New block mined successfully",
      block: newBlock
     });

});

app.listen(3000, function(){
    console.log('Listening on port 3000.....');
});