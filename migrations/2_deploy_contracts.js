const Token1 = artifacts.require('Token1.sol');
const Token2 = artifacts.require('Token2.sol');

module.exports = async function (deployer, _network, addresses) {
  await deployer.deploy(Token1);
  await deployer.deploy(Token2);
  const token1 = await Token1.deployed();
  const token2 = await Token2.deployed();
  
  console.log("token1 ", token1);
  console.log("token2 ", token2);
};