const PuppiesOfLilyfieldMarketPlaceContract = artifacts.require("PuppiesOfLilyfieldMarketPlaceContract");

module.exports = function (deployer) {
  deployer.deploy(PuppiesOfLilyfieldMarketPlaceContract);
};
