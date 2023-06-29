

const main = async () =>{

    // const [deployer] = await ethers.getSigners();
    // const voting = await ethers.getContractFactory("chai");
    // const Voting = await voting.deploy();
    // console.log("Contract address: ",Voting.address);

    const [owner] = await hre.ethers.getSigners();
    const new_voting = await hre.ethers.getContractFactory("New_Voting");
    console.log("Gonna deploy the smart contract");
    const contract = await new_voting.deploy(); //instance of contract

    await contract.deployed();
    console.log("Address of contract:", contract.address);

    
    console.log("Before voting");

    // console.log(contract);
    

    // const amount = { value: hre.ethers.utils.parseEther("1") };
    const show = await contract.BJP(1);
  console.log("This is  show=> ",show);
  await show.wait();

  console.log("after wait");

    console.log("after calling the BJP methods");
    
    const data = await contract.Winner();


    console.log("this is data=> ",data);

    console.log(
        "thiis is the end"

    )

    // console.log("After buying chai");
    // await cosoleBalances(addresses);

    // const memos = await contract.getMemos();
    // consoleMemos(memos);
}

main()
.then(()=>{process.exit(0);})
.catch((error)=>{
    console.error(error);
    process.exit(1);
})