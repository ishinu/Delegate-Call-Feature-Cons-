const { ethers } = require("hardhat");

async function main(){
  console.log("Deploying Logic contract ...");
  const Logic = await ethers.getContractFactory("Logic");
  const logic = await Logic.deploy();
  await logic.deployed();
  console.log("Logic contract deployed at : ",logic.address);
  
  console.log("Deploying delegate call contract...");
  const DelegateCall = await ethers.getContractFactory("DelegateCall");
  const delegateCall = await DelegateCall.deploy(logic.address);
  await delegateCall.deployed();
  console.log("DelegateCall contract deployed at : ",delegateCall.address);

  console.log("Deploying Attack contract...");
  const Attack = await ethers.getContractFactory("Attack");
  const attack = await Attack.deploy(delegateCall.address);
  await attack.deployed();
  console.log("Deployed Attack contract at : ",attack.address);
}

main();