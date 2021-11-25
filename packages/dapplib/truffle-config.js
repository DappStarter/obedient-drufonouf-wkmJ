require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remain mixture install cricket swear tattoo'; 
let testAccounts = [
"0x2af1dd367dabc8030b211642d7786017a2e23c464d957fbf7a9d18725102e1f6",
"0xac295ce4fd8fea689bf124299d665675ff230faee02fa1e79963031c72972985",
"0x11a979c51eb9dd5b7997d4b51720020bf7906dd83274373b2b81731823d9198e",
"0xf6cd649d6831019ce26bf928b38f30818377cca698c8fe0fad630b94571f8eb2",
"0x41820ee9cc33ae3d8fa4218d6c34fb9aec1d7f7bab2fa4a2cc4c111dc67f67f5",
"0x84a8cdf1bde51b743ca7d2bb61d9ff9d333dfdff9a6ab1853cc002721312e714",
"0x284079980e05c4730276059dcea6252ee4bc7ff8d01eaf1f99d0249fa65247fd",
"0x4e09d7c0cad19c5e33b99c147cd9ba0fc3d36ae790db68fa9f3e10e3c4c0ddc3",
"0x3d2a15e99cc52bd600f50efac26d16c56284722b0bd35f348a179cdbba470f88",
"0x294e08a4bb1ac546f92e693506de54452416932c78dd7f6508992e6be6b77d30"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

