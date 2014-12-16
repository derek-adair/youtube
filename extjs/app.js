Ext.Loader.setConfig({enabled:true});
Ext.application({
  name:'YT',
  appFolder: 'app',
  controllers: ['SearchController'],
  autoCreateViewport: true
});
