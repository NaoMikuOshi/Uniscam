// ============ Contracts ============
//const Y3dFactory = artifacts.require("y3dFactory");
//const yyCrv = artifacts.require("yyCrv");
const yswUSD = artifacts.require("yswUSD");

//const crv_deposit = artifacts.require("crv_deposit");
//const crv = artifacts.require("crv");

const migration = async (deployer, network, accounts) => {
  await Promise.all([
    deployToken(deployer, network, accounts),
  ]);
};

module.exports = migration;

// ============ Deploy Functions ============
async function deployToken(deployer, network, accounts) {
  //1.
 // console.log(accounts);
//  console.log('Deploy Y3D Token.')
//  await deployer.deploy(yyCrv, accounts[0]);  

  // await deployer.deploy(crv);

//  await deployer.deploy(crv_deposit);

  await deployer.deploy(yswUSD);  
  //2.
  
//  console.log('Deploy Pool');
 // await deployer.deploy(Y3dPool); 

  
  // Put mining
  
  /*
  console.log('Init Mining');  
  let y3dToken = new web3.eth.Contract(Y3dToken.abi, Y3dToken.address);    
  await y3dToken.methods.approve(Y3dPool.address, "1000000000000000000").send({from: accounts[0], gas: 6700000});

  let y3dPool = new web3.eth.Contract(Y3dPool.abi, Y3dPool.address);
  await y3dPool.methods.receiveApproval("1000000000000000000").send({from: accounts[0], gas: 6700000});
  */
  
//  await y3dToken.methods.burn("1000000000000000000").send({from: accounts[0], gas: 6700000});

/*
  await deployer.deploy(Y3d_ETH_Pool);  

  let y3dToken = new web3.eth.Contract(Y3dToken.abi, Y3dToken.address);    
  await y3dToken.methods.approve(Y3d_ETH_Pool.address, 10000).send({from: accounts[0], gas: 6700000});

  let pool = new web3.eth.Contract(Y3d_ETH_Pool.abi, Y3dPool.address);
  await pool.methods.receiveApproval(10000).send({from: accounts[0], gas: 6700000});
  */
  
  //await y3dFactory.methods.initWETH().send({from: accounts[0], gas: 6700000});
  //console.log(y3dFactory.wethpool);
  //console.log('UNI');
  //await y3dFactory.methods.initUNI().send({from: accounts[0], gas: 6700000});
  //console.log(y3dFactory.uniswapPool);
};