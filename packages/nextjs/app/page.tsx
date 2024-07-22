"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { Address } from "~~/components/scaffold-stark";
import { useAccount } from "@starknet-react/core";
import { Address as AddressType } from "@starknet-react/chains";
import Image from "next/image";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-stark/useScaffoldWriteContract";
import { useScaffoldReadContract } from "~~/hooks/scaffold-stark/useScaffoldReadContract";

const Home: NextPage = () => {
  const connectedAddress = useAccount();
  const { writeAsync } = useScaffoldWriteContract({
    contractName: "Vars",
    functionName: "set_u64_with_key",
    args: ["1", 432],
  });

  const { data, isLoading, isSuccess } = useScaffoldReadContract({
    contractName: "Vars",
    functionName: "get_u64_with_key",
    args: ["1"],
  });

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Welcome to</span>
            <span className="block text-4xl font-bold">Scaffold-Stark 2</span>
          </h1>
          <div className="flex justify-center items-center space-x-2">
            <p className="my-2 font-medium text-[#00A3FF]">
              Connected Address:
            </p>
            <Address address={connectedAddress.address as AddressType} />
          </div>
          <p className="text-center text-lg">
            <div>
              <p>Data: {data?.toString()}</p>
              <button onClick={() => writeAsync({})}>Write</button>
            </div>
          </p>
          <p className="text-center text-lg">
            Edit your smart contract{" "}
            <code className="bg-underline italic text-base font-bold max-w-full break-words break-all inline-block">
              YourContract.cairo
            </code>{" "}
            in{" "}
            <code className="bg-underline italic text-base font-bold max-w-full break-words break-all inline-block">
              packages/snfoundry/contracts/src
            </code>
          </p>
        </div>

        <div className="bg-container flex-grow w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl border border-gradient">
              <Image
                src="/debug-icon.svg"
                alt="icon"
                width={25}
                height={25}
              ></Image>
              <p>
                Tinker with your smart contract using the{" "}
                <Link href="/debug" passHref className="link">
                  Debug Contracts
                </Link>{" "}
                tab.
              </p>
            </div>
            <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl border border-gradient">
              <Image
                src="/explorer-icon.svg"
                alt="icon"
                width={20}
                height={20}
              ></Image>
              <p>
                Explore your local transactions with the{" "}
                <Link href="/blockexplorer" passHref className="link">
                  Block Explorer
                </Link>{" "}
                tab.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
