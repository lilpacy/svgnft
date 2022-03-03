const hre = require("hardhat");
const MyToken = require("../artifacts/example/MyToken.sol/MyToken.json");
const { waffle } = hre;
const { deployContract } = waffle;

async function main() {
  const [signer] = await hre.ethers.getSigners();
  console.log("signer:", await signer.getAddress());
  const token = await deployContract(signer, MyToken, [], {
    // gasLimit: "0x47B760",
    // gasPrice: 0
  });
  console.log("MyToken deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
