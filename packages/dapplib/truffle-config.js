require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave food story riot stereo puppy hunt define army genuine'; 
let testAccounts = [
"0x0ca0886cee77c5c4859d48696ec914d4f66bf2315b6584d8c4783d8e4de1554c",
"0x367435293b0817555278b74af2b10374d28005f16d1afc76a1ffd28e2efb3219",
"0x0a5b22de1d84da8c20a8bcb3d3891b9d92a2108a4b6ddbace376fc3de2f3c229",
"0x10d375028d58bcecb5abaf903422c8eac4743555ed211ad1e99390ab9a8d530c",
"0x955c2db01adc331fd74f6dc125dd4e4f02306db5b9792e4193d48f0335c4c9dd",
"0xd69e09251f1f8a884e9a61b18c97d2e66a5a02ef31fa0dada2837a7280c307e7",
"0xa2335bb74c0eb49fe2eeed5912c69194189e233e7651587ad41f6c584ee6b0e6",
"0x343f90031f5070aa7d66eb0317966485f381547fc0f65734e96a1b6fe7052a54",
"0x419a9ccb3301087081629803ccc804b089f9858863f79faef74ad435f7bcbf4a",
"0x54e6a43b572a6944ad659d2f6c783faa6c5a85002f2991fde45b5711f352f952"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


