/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle")
require("dotenv").config();

const {PRIVATE_KEY,API_URL} = process.env;
module.exports = {
  solidity: "0.8.18",
  networks:{
	  mumbai:{
		  url:API_URL,
		accounts:[`0x${PRIVATE_KEY}`]
	  },
	  hardhat:{
		  blockGasLimit: 100000000	
	  }
	}
};
