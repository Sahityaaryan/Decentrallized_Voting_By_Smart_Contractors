import hre from "hardhat";
// import ethers from "ethers";
// // import ContractJson from "../../artifacts/contracts/voting.sol/Voting.json"
require("dotenv").config();

const page = async ()=>{
  

    // here we have set the provider as the Alchemy provider
    const alchemy =  new hre.ethers.providers.AlchemyProvider(
      "maticmum",
      process.env.ALCHEMY_PRIVATE_KEY
    )

    // // const abi = ContractJson.abi;
    // // console.log("abi: ",abi);

    // //here instead in the wallet we have provided the alchemy as a provider but still the private_key is of Metamask that means the transactions are through Metamask but they are also being notices by the "Alchemy" and the provider is optional as well
    const userWallet =  new hre.ethers.Wallet(process.env.PRIVATE_KEY , alchemy);

    const Contract = new hre.ethers.Contract(process.env.CONTRACT_ADDRESS , abi)
    // //above the instance for the contract has been created so we can use our contract's functions



  return (
    <section>
      jai mata di
    </section>
  )
}

export default page;
