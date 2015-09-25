angular.module('app').config(['MetaProvider', 'appcst', function(MetaProvider, appcst) {
	MetaProvider.when('/', {
		title: appcst.title+' Block Explorer, BitAssets, Delegates Info, Price Charts',
		description: 'blocks.dacplay.org: an advanced block explorer for DAC PLAY. Find information on the DAC PLAY delegates, bitassets, user assets, blocks, transactions and statistics'
	});
	MetaProvider.when('/blocks', {
		title: appcst.title+' Blocks Overview: Live blockchain data',
		description: 'DAC PLAY '+appcst.title+' block explorer: live and historical blockchain data, block search and transaction filtering'
	});
	MetaProvider.when('/blocks/block', {
		title: appcst.title+' Block #',
		description: 'DAC PLAY block data: transaction info, delegate votes and more'
	});
	MetaProvider.when('/delegates', {
		title: appcst.title+' Delegates Overview: Ranks and rank changes, reliability, pay rate ++',
		description: 'DAC PLAY delegates info: rankings, rank changes, reliability, version info. Filter and search for delegates'
	});
	MetaProvider.when('/accounts', {
		title: appcst.title+' Accounts Overview: Registration date, wall burns ++',
		description: 'DAC PLAY accounts info: search accounts by registration date and name'
	});
	MetaProvider.when('/assets/market', {
		title: appcst.title+' BitAssets Overview: Price and Volume, Yield, Collateral, Feeds, Marketcap',
		description: 'All about the DAC PLAY BitAssets: price, yield, orderbook, supply and collateral chart, and marketcap'
	});
	MetaProvider.when('/assets/user', {
		title: appcst.title+' User Assets Overview: Price and Volume, Supply, Marketcap ++',
		description: 'All about the DAC PLAY user assets: price, orderbook, supply chart and marketcap ++'
	});
	MetaProvider.when('/charts/*', {
		title: appcst.title+' Price History and Supply Charts ++',
		description: 'DAC PLAY historical charts: price, inflation tracking, transaction counts, new accounts over time ++'
	});
	MetaProvider.when('/genesis-bts', {
		title: appcst.title+' Genesis Data | Rich list and distribution statistics',
		description: 'DAC PLAY '+appcst.title+' genesis block analysis: charts, rich list, distribution ++'
	});
	MetaProvider.when('/genesis-btsx', {
		title: 'BitsharesX Genesis Data | Rich list and distribution statistics',
		description: 'BitsharesX genesis block analysis: charts, rich list, distribution ++'
	});
	MetaProvider.when('/about', {
		title: 'About Bitsharesblocks and DAC PLAY',
		description: 'Useful links, donation info, dev.bitsharesblocks delegate bid'
	});
}]);