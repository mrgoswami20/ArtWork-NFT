const hre = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
const tokenContractJSON = require("../artifacts/contracts/artworkNFT.sol/artworkNFT.json");

const tokenAddress = "0x1A11acC803C3B6fF3f9bF751194D33271CA3D501";
const tokenABI = tokenContractJSON.abi;
const fxERC721RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
const walletAddress = "0x63DdB3Fb087b6DFdE32aec3d74Ad58A3b3937fEE";
const tokenId = [0, 1, 2, 3, 4];

async function main() {
  const tokenContract = await hre.ethers.getContractAt(tokenABI, tokenAddress);
  const fxContract = await hre.ethers.getContractAt(
    fxRootContractABI,
    fxERC721RootAddress
  );

  for (let i = 0; i < tokenId.length; i++) {
    const approveTx = await tokenContract.approve(
      fxERC721RootAddress,
      tokenId[i]
    );
    await approveTx.wait();

    console.log("Approval confirmed");

    const depositTx = await fxContract.deposit(
      tokenAddress,
      walletAddress,
      tokenId[i],
      "0x6556"
    );
    await depositTx.wait();

    console.log("Tokens deposited");
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
