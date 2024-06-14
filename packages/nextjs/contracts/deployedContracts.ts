/**
 * This file is autogenerated by Scaffold-Stark.
 * You should not edit it manually or your changes might be overwritten.
 */

const deployedContracts = {
  devnet: {
    YourContract: {
      address:
        "0x0306c9df374bf19d7ba7eddd75dbd31aaccd8e6a380d46990b499165890a6c53",
      abi: [
        {
          type: "impl",
          name: "YourContractImpl",
          interface_name: "contracts::YourContract::IYourContract",
        },
        {
          type: "struct",
          name: "core::byte_array::ByteArray",
          members: [
            {
              name: "data",
              type: "core::array::Array::<core::bytes_31::bytes31>",
            },
            {
              name: "pending_word",
              type: "core::felt252",
            },
            {
              name: "pending_word_len",
              type: "core::integer::u32",
            },
          ],
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "enum",
          name: "contracts::YourContract::SampleEnum",
          variants: [
            {
              name: "enum1",
              type: "core::integer::u256",
            },
            {
              name: "enum2",
              type: "core::integer::u256",
            },
            {
              name: "enum3",
              type: "core::byte_array::ByteArray",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::YourContract::SampleStruct",
          members: [
            {
              name: "id",
              type: "core::integer::u256",
            },
            {
              name: "name",
              type: "core::byte_array::ByteArray",
            },
            {
              name: "status",
              type: "contracts::YourContract::SampleEnum",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::YourContract::SampleNestedStruct",
          members: [
            {
              name: "user",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "data",
              type: "contracts::YourContract::SampleStruct",
            },
            {
              name: "status",
              type: "contracts::YourContract::SampleEnum",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::felt252>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::felt252>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::integer::u256>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::integer::u256>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::bool>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::bool>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::starknet::contract_address::ContractAddress>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::byte_array::ByteArray>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::byte_array::ByteArray>",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::YourContract::IYourContract",
          items: [
            {
              type: "function",
              name: "gretting",
              inputs: [],
              outputs: [
                {
                  type: "core::byte_array::ByteArray",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "set_gretting",
              inputs: [
                {
                  name: "new_greeting",
                  type: "core::byte_array::ByteArray",
                },
                {
                  name: "amount_eth",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "withdraw",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "premium",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_simple_enum_read",
              inputs: [],
              outputs: [
                {
                  type: "contracts::YourContract::SampleEnum",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_simple_enum_write",
              inputs: [
                {
                  name: "sample_enum",
                  type: "contracts::YourContract::SampleEnum",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_struct_read",
              inputs: [],
              outputs: [
                {
                  type: "contracts::YourContract::SampleStruct",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_struct_write",
              inputs: [
                {
                  name: "sample_struct",
                  type: "contracts::YourContract::SampleStruct",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_nested_struct_read",
              inputs: [],
              outputs: [
                {
                  type: "contracts::YourContract::SampleNestedStruct",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_nested_struct_write",
              inputs: [
                {
                  name: "sample_nested_struct",
                  type: "contracts::YourContract::SampleNestedStruct",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_felt",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::felt252>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_u256",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::integer::u256>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_bool",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::bool>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_address",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_byte_array",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::byte_array::ByteArray>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_double_input_span",
              inputs: [
                {
                  name: "span1",
                  type: "core::array::Span::<core::integer::u256>",
                },
                {
                  name: "span2",
                  type: "core::array::Span::<core::integer::u256>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_last_span_data_felt",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::felt252)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_u256",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::integer::u256)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_bool",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::bool)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_address",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::starknet::contract_address::ContractAddress)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_byte_array",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::byte_array::ByteArray)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_read_double_input_span",
              inputs: [],
              outputs: [
                {
                  type: "(core::integer::u256, core::integer::u256)",
                },
              ],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableImpl",
          interface_name: "openzeppelin::access::ownable::interface::IOwnable",
        },
        {
          type: "interface",
          name: "openzeppelin::access::ownable::interface::IOwnable",
          items: [
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_ownership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
              kind: "nested",
            },
            {
              name: "OwnershipTransferStarted",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::YourContract::YourContract::GreetingChanged",
          kind: "struct",
          members: [
            {
              name: "greeting_setter",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_greeting",
              type: "core::byte_array::ByteArray",
              kind: "key",
            },
            {
              name: "premium",
              type: "core::bool",
              kind: "data",
            },
            {
              name: "value",
              type: "core::integer::u256",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::YourContract::YourContract::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnableEvent",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
              kind: "flat",
            },
            {
              name: "GreetingChanged",
              type: "contracts::YourContract::YourContract::GreetingChanged",
              kind: "nested",
            },
          ],
        },
      ],
    },
  },
  sepolia: {
    YourContract: {
      address:
        "0x02b80655fe8a023b20e30e4cb658162324c52e4d507633914ce1d4bae3015ac7",
      abi: [
        {
          type: "impl",
          name: "YourContractImpl",
          interface_name: "contracts::YourContract::IYourContract",
        },
        {
          type: "struct",
          name: "core::byte_array::ByteArray",
          members: [
            {
              name: "data",
              type: "core::array::Array::<core::bytes_31::bytes31>",
            },
            {
              name: "pending_word",
              type: "core::felt252",
            },
            {
              name: "pending_word_len",
              type: "core::integer::u32",
            },
          ],
        },
        {
          type: "struct",
          name: "core::integer::u256",
          members: [
            {
              name: "low",
              type: "core::integer::u128",
            },
            {
              name: "high",
              type: "core::integer::u128",
            },
          ],
        },
        {
          type: "enum",
          name: "core::bool",
          variants: [
            {
              name: "False",
              type: "()",
            },
            {
              name: "True",
              type: "()",
            },
          ],
        },
        {
          type: "enum",
          name: "contracts::YourContract::SampleEnum",
          variants: [
            {
              name: "enum1",
              type: "core::integer::u256",
            },
            {
              name: "enum2",
              type: "core::integer::u256",
            },
            {
              name: "enum3",
              type: "core::byte_array::ByteArray",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::YourContract::SampleStruct",
          members: [
            {
              name: "id",
              type: "core::integer::u256",
            },
            {
              name: "name",
              type: "core::byte_array::ByteArray",
            },
            {
              name: "status",
              type: "contracts::YourContract::SampleEnum",
            },
          ],
        },
        {
          type: "struct",
          name: "contracts::YourContract::SampleNestedStruct",
          members: [
            {
              name: "user",
              type: "core::starknet::contract_address::ContractAddress",
            },
            {
              name: "data",
              type: "contracts::YourContract::SampleStruct",
            },
            {
              name: "status",
              type: "contracts::YourContract::SampleEnum",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::felt252>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::felt252>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::integer::u256>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::integer::u256>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::bool>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::bool>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::starknet::contract_address::ContractAddress>",
            },
          ],
        },
        {
          type: "struct",
          name: "core::array::Span::<core::byte_array::ByteArray>",
          members: [
            {
              name: "snapshot",
              type: "@core::array::Array::<core::byte_array::ByteArray>",
            },
          ],
        },
        {
          type: "interface",
          name: "contracts::YourContract::IYourContract",
          items: [
            {
              type: "function",
              name: "gretting",
              inputs: [],
              outputs: [
                {
                  type: "core::byte_array::ByteArray",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "set_gretting",
              inputs: [
                {
                  name: "new_greeting",
                  type: "core::byte_array::ByteArray",
                },
                {
                  name: "amount_eth",
                  type: "core::integer::u256",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "withdraw",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "premium",
              inputs: [],
              outputs: [
                {
                  type: "core::bool",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_simple_enum_read",
              inputs: [],
              outputs: [
                {
                  type: "contracts::YourContract::SampleEnum",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_simple_enum_write",
              inputs: [
                {
                  name: "sample_enum",
                  type: "contracts::YourContract::SampleEnum",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_struct_read",
              inputs: [],
              outputs: [
                {
                  type: "contracts::YourContract::SampleStruct",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_struct_write",
              inputs: [
                {
                  name: "sample_struct",
                  type: "contracts::YourContract::SampleStruct",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_nested_struct_read",
              inputs: [],
              outputs: [
                {
                  type: "contracts::YourContract::SampleNestedStruct",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_nested_struct_write",
              inputs: [
                {
                  name: "sample_nested_struct",
                  type: "contracts::YourContract::SampleNestedStruct",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_felt",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::felt252>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_u256",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::integer::u256>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_bool",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::bool>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_address",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::starknet::contract_address::ContractAddress>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_write_span_byte_array",
              inputs: [
                {
                  name: "span",
                  type: "core::array::Span::<core::byte_array::ByteArray>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "test_double_input_span",
              inputs: [
                {
                  name: "span1",
                  type: "core::array::Span::<core::integer::u256>",
                },
                {
                  name: "span2",
                  type: "core::array::Span::<core::integer::u256>",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "get_last_span_data_felt",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::felt252)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_u256",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::integer::u256)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_bool",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::bool)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_address",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::starknet::contract_address::ContractAddress)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "get_last_span_data_byte_array",
              inputs: [],
              outputs: [
                {
                  type: "(core::felt252, core::byte_array::ByteArray)",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "test_read_double_input_span",
              inputs: [],
              outputs: [
                {
                  type: "(core::integer::u256, core::integer::u256)",
                },
              ],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "impl",
          name: "OwnableImpl",
          interface_name: "openzeppelin::access::ownable::interface::IOwnable",
        },
        {
          type: "interface",
          name: "openzeppelin::access::ownable::interface::IOwnable",
          items: [
            {
              type: "function",
              name: "owner",
              inputs: [],
              outputs: [
                {
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              state_mutability: "view",
            },
            {
              type: "function",
              name: "transfer_ownership",
              inputs: [
                {
                  name: "new_owner",
                  type: "core::starknet::contract_address::ContractAddress",
                },
              ],
              outputs: [],
              state_mutability: "external",
            },
            {
              type: "function",
              name: "renounce_ownership",
              inputs: [],
              outputs: [],
              state_mutability: "external",
            },
          ],
        },
        {
          type: "constructor",
          name: "constructor",
          inputs: [
            {
              name: "owner",
              type: "core::starknet::contract_address::ContractAddress",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
          kind: "struct",
          members: [
            {
              name: "previous_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_owner",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
          ],
        },
        {
          type: "event",
          name: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnershipTransferred",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
              kind: "nested",
            },
            {
              name: "OwnershipTransferStarted",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
              kind: "nested",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::YourContract::YourContract::GreetingChanged",
          kind: "struct",
          members: [
            {
              name: "greeting_setter",
              type: "core::starknet::contract_address::ContractAddress",
              kind: "key",
            },
            {
              name: "new_greeting",
              type: "core::byte_array::ByteArray",
              kind: "key",
            },
            {
              name: "premium",
              type: "core::bool",
              kind: "data",
            },
            {
              name: "value",
              type: "core::integer::u256",
              kind: "data",
            },
          ],
        },
        {
          type: "event",
          name: "contracts::YourContract::YourContract::Event",
          kind: "enum",
          variants: [
            {
              name: "OwnableEvent",
              type: "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
              kind: "flat",
            },
            {
              name: "GreetingChanged",
              type: "contracts::YourContract::YourContract::GreetingChanged",
              kind: "nested",
            },
          ],
        },
      ],
    },
  },
} as const;

export default deployedContracts;
