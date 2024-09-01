import {
  deployContract,
  executeDeployCalls,
  exportDeployments,
  deployer,
} from "./deploy-contract";
import { green } from "./helpers/colorize-log";

/**
 * Deploy a contract using the specified parameters.
 *
 * @example (deploy contract with contructorArgs)
 * const deployScript = async (): Promise<void> => {
 *   await deployContract(
 *     {
 *       contract: "YourContract",
 *       contractName: "YourContractExportName",
 *       constructorArgs: {
 *         owner: deployer.address,
 *       },
 *       options: {
 *         maxFee: BigInt(1000000000000)
 *       }
 *     }
 *   );
 * };
 *
 * @example (deploy contract without contructorArgs)
 * const deployScript = async (): Promise<void> => {
 *   await deployContract(
 *     {
 *       contract: "YourContract",
 *       contractName: "YourContractExportName",
 *       options: {
 *         maxFee: BigInt(1000000000000)
 *       }
 *     }
 *   );
 * };
 *
 *
 * @returns {Promise<void>}
 */
const deployScript = async (): Promise<void> => {
  let name = "VaultNFT";
  let symbol = "VaultNFT";
  let base_uri = "https://api.example.com/v1/";
  let base_price = "100000000000000"
  await deployContract({
    contract: "BasicVaultNFT",
    constructorArgs: {
      name,
      symbol,
      base_uri,
      base_price,
      asset: "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",//eth
    },
  });


  // await deployContract({
  //   contract: "VaultNFTWithFee",
  //   constructorArgs: {
  //     name,
  //     symbol,
  //     base_uri,
  //     base_price,
  //     asset: "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",//eth
  //     mint_fee: "10000",
  //     redeem_fee: "10000",
  //     fee_recipient: deployer.address,
  //   },
  // });

  // await deployContract({
  //   contract: "VaultNFTWithPriceFunction",
  //   constructorArgs: {
  //     name,
  //     symbol,
  //     base_uri,
  //     base_price,
  //     asset: "0x049D36570D4e46f48e99674bd3fcc84644DdD6b96F7C741B1562B82f9e004dC7",//eth
  //     mint_fee: "10000",
  //     redeem_fee: "10000",
  //     fee_recipient: deployer.address,
  //   },
  // });
};

deployScript()
  .then(async () => {
    await executeDeployCalls();
    exportDeployments();

    console.log(green("All Setup Done"));
  })
  .catch(console.error);
