const { getNamedAccounts, ethers } = require("hardhat")

async function main(){
  const { deployer } = await getNamedAccounts()
  const fundMe = await ethers.getContractAt("FundMe", deployer)
  const sendValue = "100000000000000000" //1e17 = 0.1ethers
  console.log("Funding Contract...")
  const transactionResponse = await fundMe.fund({
    value: sendValue
  })
  await transactionResponse.wait(1)
  console.log("Funded!")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })