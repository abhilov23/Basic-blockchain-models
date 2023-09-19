const Blockchain = require('./blockchain');

const bitcoin =  new Blockchain();

const previousBlockHash = 'DNVKJNDFKVNFJLDF4T8548954';
const currentBlockData = [
    {
        amount: 10,
        sender: 'dvjniru94t84',
        recipient: 'cdberiu4984fr4'
    },    {
        amount: 20,
        sender: 'dvjnvfru94t84',
        recipient: 'cdbferiu4984fr4'
    },    {
        amount: 30,
        sender: 'dvjniruv94t84',
        recipient: 'cdberbiu4984fr4'
    }
];

console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));

//console.log(bitcoin);

//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 158935));






/* bitcoin.createNewBlock(3487543, 'vnfi49m40r', 'fn9444943');

bitcoin.createNewTransaction(100, 'Abhilovj043mdn3', 'Jen393r3fdk'); //going to add these transactions in the pending section until we gonna create new transactions

bitcoin.createNewBlock(3447543, 'vnfi4943430r', 'fn943434943');

bitcoin.createNewTransaction(107, 'Tanyaj043mdn3', 'Jef393r3fdk'); 
bitcoin.createNewTransaction(108, 'Priyaj043mdn3', 'Jed393r3fdk'); 
bitcoin.createNewTransaction(109, 'Divyanshj043mdn3', 'Je393r3fdk'); 

bitcoin.createNewBlock();

console.log(bitcoin); */