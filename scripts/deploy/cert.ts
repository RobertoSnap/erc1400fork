import { ethers } from "@nomiclabs/buidler";

async function main() {
  // console.log("Remember to first deploy erc1820 and set address in ERC1820Client")
  const factory = await ethers.getContract("CertificateControllerMock");

  const signer = await ethers.getSigners();
  const address = await signer[0].getAddress();
  console.log("ADDRESS #####", address);
  // If we had constructor arguments, they would be passed into deploy()
  let contract = await factory.deploy(address, false);

  // The address the Contract WILL have once mined
  console.log(contract.address);

  // The transaction that was sent to the network to deploy the Contract
  console.log(contract.deployTransaction.hash);

  // The contract is NOT deployed yet; we must wait until it is mined
  await contract.deployed();
  console.log("CertificateControllerMock has been deployed");
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
