const { expect } = require("chai");
require("dotenv").config();
const hre = require("hardhat");


describe("Voting contract", async function () {

    it("checking the votes are issuing or not", async function () {
        const Voting = await hre.ethers.getContractFactory("New_Voting");
        const hardhatToken = await Voting.deploy();

        await hardhatToken.deployed();
        console.log("Contract code:", hardhatToken.address);

        const show = await hardhatToken.BJP(1);
        console.log(show);

        const data = await hardhatToken.Winner();

        console.log(
            "data=> ", data
        );

        expect(data).to.equal(1);
    })
})

