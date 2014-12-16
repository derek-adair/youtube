Ext.define('YT.store.Videos', {
  extend: 'Ext.data.Store',
  model: 'YT.model.Video',
  autoLoad: true,
  proxy: {
    type: 'ajax',
    url: 'https://gdata.youtube.com/feeds/api/videos?v=2&alt=json',
    reader: {
            type: 'json',
            root: 'feed.entry'
    },
    listeners: {
      exception: function(store, response, app){
        console.log('exception...');
        console.log(response);
      },
      requestComplete: function(conn, response, opts){
        console.log('complete...');
        console.log(response);
      }
    }
  }
});
