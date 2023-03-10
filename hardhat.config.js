require("@nomicfoundation/hardhat-toolbox");

const dotenv = require("dotenv");

dotenv.config();





task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
   console.log(account.addres);
  }
});







/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",

  networks:{
    goerli:{
     url: process.env.REACT_APP_RINKEBY_RPC_URL,
     accounts: [process.env.REACT_APP_PRIVATE_KEY]
   },
  },



  etherscan: {
    apiKey: {
      goerli: process.env.REACT_APP_ETHERSCAN_KEY,
    }
  }


};
