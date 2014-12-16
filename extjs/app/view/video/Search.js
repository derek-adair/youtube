Ext.define('YT.view.video.Search', {
  extend: 'Ext.form.Panel',
  alias: 'widget.videoSearch',
  bodyStyle: 'padding: 10px;',
  cls: 'search-form',
  buttons: [{text: 'Search', action: 'search'}],
  items: [{
    itemId: 'search',
    xtype: 'textfield',
    fieldLabel: 'Search:'
  }]  
});
