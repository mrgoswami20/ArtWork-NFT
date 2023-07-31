// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/artworkNFT.sol/artworkNFT.json");

const tokenAddress = "0x1A11acC803C3B6fF3f9bF751194D33271CA3D501";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x63DdB3Fb087b6DFdE32aec3d74Ad58A3b3937fEE";

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });