// SPDX-License-Identifier: MIT
use starknet::{ContractAddress};

#[starknet::contract]
pub mod VaultNFTWithPriceFunction {
    use openzeppelin::introspection::src5::SRC5Component;
    use openzeppelin::token::erc721::{ERC721Component, ERC721HooksEmptyImpl};
    use openzeppelin::token::erc20::{ERC20ABIDispatcher, ERC20ABIDispatcherTrait};
    use starknet::{get_contract_address, get_caller_address};
    use starknet::{ContractAddress};
    use contracts::interfaces;


    component!(path: ERC721Component, storage: erc721, event: ERC721Event);
    component!(path: SRC5Component, storage: src5, event: SRC5Event);

    #[storage]
    struct Storage {
        asset: ContractAddress,
        total_assets: u256,
        token_id: u256,
        total_supply: u256,
        base_price: u256,
        #[substorage(v0)]
        erc721: ERC721Component::Storage,
        #[substorage(v0)]
        src5: SRC5Component::Storage,
    }

    #[event]
    #[derive(Drop, starknet::Event)]
    enum Event {
        #[flat]
        ERC721Event: ERC721Component::Event,
        #[flat]
        SRC5Event: SRC5Component::Event,
        Mint: Mint,
        Redeem: Redeem
    }

    #[derive(Drop, PartialEq, starknet::Event)]
    pub struct Mint {
        #[key]
        pub token_id: u256,
        #[key]
        pub owner: ContractAddress,
        #[key]
        pub assets: u256
    }

    #[derive(Drop, PartialEq, starknet::Event)]
    pub struct Redeem {
        #[key]
        pub token_id: u256,
        #[key]
        pub owner: ContractAddress,
        #[key]
        pub assets: u256
    }


    #[abi(embed_v0)]
    impl ERC721MixinImpl = ERC721Component::ERC721MixinImpl<ContractState>;
    impl ERC721InternalImpl = ERC721Component::InternalImpl<ContractState>;

    #[constructor]
    fn constructor(
        ref self: ContractState,
        name: ByteArray,
        symbol: ByteArray,
        base_uri: ByteArray,
        base_price: u256,
        asset: ContractAddress
    ) {
        self.asset.write(asset);
        self.base_price.write(base_price);
        self.erc721.initializer(name, symbol, base_uri);
    }

    #[abi(embed_v0)]
    pub impl NFTVaultImpl of interfaces::IVaultNFT<ContractState> {
        fn asset(self: @ContractState) -> ContractAddress {
            self.asset.read()
        }

        fn total_assets(self: @ContractState) -> u256 {
            self.total_assets.read()
        }

        fn convert_to_nft(self: @ContractState) -> u256 {
            self.base_price.read() + self.base_price.read() * self.total_supply.read() / 10000
        }

        //burn after this
        fn convert_to_assets(self: @ContractState, token_id: u256) -> u256 {
            self.base_price.read() + self.base_price.read() * (self.total_supply.read() - 1) / 10000
        }

        fn mint(ref self: ContractState) {
            let assets = self.convert_to_nft();
            let caller = get_caller_address();
            let contract_address = get_contract_address();
            let asset = ERC20ABIDispatcher { contract_address: self.asset.read() };
            asset.transferFrom(caller, contract_address, assets);
            self.total_assets.write(self.total_assets.read() + assets);
            self.token_id.write(self.token_id.read() + 1);
            self.erc721.mint(caller, self.token_id.read());
            self.total_supply.write(self.total_supply.read() + 1);
            self.emit(Mint { token_id: self.token_id.read(), owner: caller, assets: assets });
        }

        fn redeem(ref self: ContractState, token_id: u256) {
            let caller = get_caller_address();
            let assets = self.convert_to_assets(token_id);
            let asset = ERC20ABIDispatcher { contract_address: self.asset.read() };
            asset.transfer(caller, assets);
            self.total_assets.write(self.total_assets.read() - assets);
            self.erc721.burn(token_id);
            self.total_supply.write(self.total_supply.read() - 1);
            self.emit(Redeem { token_id: token_id, owner: caller, assets: assets });
        }
    }
}
