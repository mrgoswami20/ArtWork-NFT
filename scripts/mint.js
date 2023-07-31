const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/artworkNFT.sol/artworkNFT.json");
require('dotenv').config()

const tokenAddress = "0x1A11acC803C3B6fF3f9bF751194D33271CA3D501";
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x63DdB3Fb087b6DFdE32aec3d74Ad58A3b3937fEE";
const tokenId = [0, 1, 2, 3, 4];
const URI = ["https://salmon-cold-emu-143.mypinata.cloud/ipfs/QmUtEjDwfRUqp3R65pbwdsafkj2TtL3LAnXQz7ed9pABCA?_gl=1*vjuiof*_ga*MTg4MDA0MTM1LjE2OTA2MjQzMjM.*_ga_5RMPXG14TE*MTY5MDgwMjU3NC45LjEuMTY5MDgwMjYxMS4yMy4wLjA.","https://salmon-cold-emu-143.mypinata.cloud/ipfs/QmW1PbSvY5vWxcqJtovV3gaMhMeqBs9mD1gbr7ACpjFZ4F?_gl=1*15q2zpk*_ga*MTg4MDA0MTM1LjE2OTA2MjQzMjM.*_ga_5RMPXG14TE*MTY5MDgwMjU3NC45LjEuMTY5MDgwMjYxMS4yMy4wLjA.","https://salmon-cold-emu-143.mypinata.cloud/ipfs/QmXWr7KjVhKvr2zjqvio32pAS7M9gY7QjQkEYHKwsWfGU1?_gl=1*15q2zpk*_ga*MTg4MDA0MTM1LjE2OTA2MjQzMjM.*_ga_5RMPXG14TE*MTY5MDgwMjU3NC45LjEuMTY5MDgwMjYxMS4yMy4wLjA.","https://salmon-cold-emu-143.mypinata.cloud/ipfs/Qmah26DVzYTeMuUwSR5NiTcAf5uhCMzfgUtmwLo9FC3NbD?_gl=1*15q2zpk*_ga*MTg4MDA0MTM1LjE2OTA2MjQzMjM.*_ga_5RMPXG14TE*MTY5MDgwMjU3NC45LjEuMTY5MDgwMjYxMS4yMy4wLjA.","https://salmon-cold-emu-143.mypinata.cloud/ipfs/QmSCNESJv2S8GAvRADzGCLyhU52jp7k6Cfi4zTmST6yNtA?_gl=1*15q2zpk*_ga*MTg4MDA0MTM1LjE2OTA2MjQzMjM.*_ga_5RMPXG14TE*MTY5MDgwMjU3NC45LjEuMTY5MDgwMjYxMS4yMy4wLjA."]

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  
    for (let i = 0; i < tokenId.length; i++){
      const tx = await token.mintt(walletAddress, tokenId[i+1], URI);
    await tx.wait();
    }

    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });