Ext.define('YT.view.Viewport',{
    extend: 'Ext.container.Viewport',
    requires: [
      'YT.view.video.Search',
      'YT.view.video.Player',
      'YT.view.video.List'
    ],
    layout: 'border',
    items: [{
      region: 'center',
      title: 'Youtube Player',
      xtype: 'videoPlayer'
      //xtype: 'panel',
      //html: 'eh?'
    },{ 
      region: 'west',
      xtype: 'panel',
      collapsible: true,
      items: [
        {xtype: 'videoSearch'},
        {xtype: 'videoList' }
      ]
    }]
});
