require("@nomicfoundation/hardhat-toolbox");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.17",
    networks: {
      goerli: {
        url: "https://silent-quick-knowledge.ethereum-goerli.discover.quiknode.pro/ada5184074917c74bb9ee2cd4cadf9f586f8e29d/",
        accounts: ['ad16e7d64397eb28d16d591fabefefe77c06e34b33dea52dfc13fcacb7631b1c'       ]
      },
    },
};
