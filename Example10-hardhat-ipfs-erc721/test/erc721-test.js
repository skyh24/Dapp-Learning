const { expect } = require("chai");
const { exec } = require('child_process');


describe("ERC721 contract", function() {
  it("Deployment should not assign any Token to deployer", async function() {
    const [owner,addr1, addr2] = await ethers.getSigners();

    console.log(owner.address)
    console.log(addr1.address)

    const Token = await ethers.getContractFactory("ERC721");

    const hardhatToken = await Token.deploy("ERC721","Token");
    console.log(hardhatToken.address);

    const ownerBalance = await hardhatToken.balance(owner.address);
    expect("0").to.equal(ownerBalance);
  });

});