// // if the contract doesn't exist, we deploy a minimal version of for our local testing

// const { network } = require("hardhat")
// const { developmentChains, DECIMALS, INITIAL_ANSWER} = require("../helper-hardhat-config")

// module.export.default = async ({ getNamedAccounts, deployments }) => {
//     const { deploy, log } = deployments
//     const { deployer } = await getNamedAccounts()
//     // const chainId = network.config.chainId

//     if(developmentChains.includes(network.name)){
//         log("Local network detected! deploying mocks")
//         await deploy("MockV3Aggregator", {
//             contract: "MockV3Aggregator",
//             from: deployer,
//             log: true, 
//             args: [DECIMALS, INITIAL_ANSWER]

//         })
//         log("Mocks deployed")
//         log("--------------------------------------")
//     }
// }

// module.exports.tags = ["all", "mocks"]

const { network } = require("hardhat")
const { developmentChains, DECIMALS, INITIAL_ANSWER} = require("../helper-hardhat-config")

// const DECIMALS = "8"
// const INITIAL_PRICE = "200000000000" // 2000
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    // If we are on a local development network, we need to deploy mocks!
    if(developmentChains.includes(network.name)){
        log("Local network detected! deploying mocks")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true, 
            args: [DECIMALS, INITIAL_ANSWER]

        })
        log("Mocks deployed")
        log("--------------------------------------")
    }
}
module.exports.tags = ["all", "mocks"]