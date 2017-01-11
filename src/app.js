// environment
const setDefaultAccount = require('./environment').setDefaultAccount;

// web3 instance and setup method
const web3 = require('./web3').web3;
const withWeb3Provider = require('./web3').withWeb3Provider;

// ipfs instance and setup
const setupIPFSProvider = require('./ipfs').setupIPFSProvider;
const networkDetective = require('web3-network-detective');

// router instance
const router = require('./router');
const setupRouter = router.setupRouter;
const getRouter = router.getRouter;

// handlers draw
const handlers = require('./handlers');
const drawNavBar = handlers.drawNavBar;
const drawFooter = handlers.drawFooter;
const drawStartCampaignView = handlers.drawStartCampaignView;
const loadAndDrawCampaign = handlers.loadAndDrawCampaign;
const loadAndDrawCampaignsList = handlers.loadAndDrawCampaignsList;
const loadAndDrawCampaignContribute = handlers.loadAndDrawCampaignContribute;
const loadAndDrawCampaignPayout = handlers.loadAndDrawCampaignPayout;
const loadAndDrawCampaignRefund = handlers.loadAndDrawCampaignRefund;
const handleConfirmOnPageExit = handlers.handleConfirmOnPageExit;
const loadAndDrawAccount = handlers.loadAndDrawAccount;

// draw navbar
drawNavBar();

// draw startcampaign page
drawStartCampaignView();

/**
 * There are three phases during the initialization of the app:
 * 1. Wait for the load event to be fired in the browser after Metamask would
 *      have been injected, if present.
 * 2. Asynchronously create a Web3 provider by grabbing Metamask's or pulling
 *     a lightwallet from localstorage.
 * 3. Finish initializing the app with the user's account available.
 */

const loadAppWithAccounts = function (provider) {
  web3.setProvider(provider);

  // detect what network everything is on
  networkDetective(web3.currentProvider, function(detectiveError, detectiveResut){
    if (!detectiveError) {
      if (detectiveResut.testnet !== true) {
        confirm(`WARNING:
-----------
Your Web3 provider is not set to the Ethereum Morden Testnet.

Please switch your provider to the Ethereum Morden testnet and refresh the page.`);
      }
    }
  });

  // select default account
  web3.eth.getAccounts(function(accountsError, accounts){
    if (!accountsError && accounts.length) {
      setDefaultAccount(accounts[0]);
    }
  });
}

// load application
const loadApp = function (loadAppEvent) {
  // window warnign message
  window.onunload = window.onbeforeunload = handleConfirmOnPageExit;

  // Use a provider without accounts until we can get the account provider
  // from Metamask or localstorage.
  web3.setProvider(new web3.providers.HttpProvider('https://morden.infura.io/'));
  withWeb3Provider(loadAppWithAccounts);

  setupIPFSProvider();

  // setup the router
  setupRouter({
    loadAndDrawCampaignPayout: loadAndDrawCampaignPayout,
    loadAndDrawCampaignContribute: loadAndDrawCampaignContribute,
    loadAndDrawCampaignRefund: loadAndDrawCampaignRefund,

    loadAndDrawCampaign: loadAndDrawCampaign,
    loadAndDrawCampaignsList: loadAndDrawCampaignsList,
    loadAndDrawAccount: loadAndDrawAccount,
  });

  // set initial route from params
  getRouter()(window.location.pathname);

  // draw footer later
  drawFooter();
};

// setup provider
// attempt conenction and run system
window.addEventListener('load', loadApp);
