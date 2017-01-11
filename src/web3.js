// Pull keystore from localstorage
// If not present, generate one with a fixed password
// Use the keystore in a hooked web3 provider or a web3 provider engine
//

const lightwallet = require('eth-lightwallet');
const Web3 = require('web3');
const ProviderEngine = require('web3-provider-engine');
const HookedWalletSubprovider = require('web3-provider-engine/subproviders/hooked-wallet');
const Web3Subprovider = require('web3-provider-engine/subproviders/web3');


// new web3 object
const web3 = new Web3();


const createLightwalletProvider = function (callback) {
  // Generate a dummy, insecure lightwallet.
  // FIXME: Collect user input to generate a keystore.
  const password = 'this is insecure';
  lightwallet.keystore.createVault({
    password,
    hdPathString: "m/44'/60'/0'/0",
    // This seed is from testrpc -d. The address of account 0 should be 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1.
    seedPhrase: 'myth like bonus scare over problem client lizard pioneer submit female collect',
  }, function (err, ks) {
    if (err) throw err;

    ks.keyFromPassword(password, function (err, pwDerivedKey) {
      ks.generateNewAddress(pwDerivedKey, 1);
      ks.passwordProvider = function (cb) { cb(null, password); };
      window.localStorage.setItem('keystore', ks.serialize());

      // Create a provider engine that uses the keystore to sign transactions.
      const provider = new ProviderEngine();
      provider.addProvider(new HookedWalletSubprovider({
        getAccounts: ks.getAddresses,
        signTransaction: ks.signTransaction,
      }));
      const web3Provider = new web3.providers.HttpProvider('https://morden.infura.io/');
      provider.addProvider(new Web3Subprovider(web3Provider));
      provider.start();
      provider.stop();
      callback(provider);
    });
  });
}

const getOrCreateLightwalletProvider = function (callback) {
  const keystore = window.localStorage.getItem('keystore');
  if (keystore != null) {
    callback(lightwallet.keystore.deserialize(JSON.parse(keystore));
  }
  createLightwalletProvider(callback);
}

// setup web3 provider
const withWeb3Provider = function (callback) {
  // window provider support (metamask)
  if (typeof window.web3 !== 'undefined' && typeof window.web3.currentProvider !== 'undefined') {
    callback(window.web3.currentProvider);
  } else {
    createLightwalletProvider(callback);
  }
};

// export web3 instance and setup
module.exports = {
  web3: web3,
  withWeb3Provider: withWeb3Provider,
};
