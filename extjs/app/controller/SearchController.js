Ext.define('YT.controller.SearchController', {
  extend: 'Ext.app.Controller',
  stores: ['Videos'],
  models: ['Video'],
  views: [
    'video.List',
    'video.Search'
  ],
  refs: [
    {ref: 'viewport', selector: 'viewport'},
    {ref: 'searchForm', selector: 'videoSearch'},
    {ref: 'searchCombo', selector: 'videoSearch textfield'},
    {ref: 'videoPlayer', selector: 'videoPlayer'}
  ],
  init: function(){
    this.control({
      'videoSearch button[action=search]': {
        click: this.search
      },
      'videoList': {
        itemdblclick: this.loadVideo
      }
    });
  },
  loadVideo: function(grid, record){
        
    var embedThis = record.data.content, // video content
        playerView = this.getVideoPlayer(),
        //viewPort = this.getViewport(),
        // define flash container to embed video
        // **NOTE**
        // this uses youtubes jsapi player > ?enablejsapi=1&playerapiid=ytplayer
        swf = { xtype: 'flash', url: embedThis + '&enablejsapi=1&playerapiid=ytplayer'};
        newSwf = Ext.widget('videoPlayer', {items:[swf]});
                                                    
    // a little hackish simplify this by 
    // extracting/sepparating this search controller out
    // into a player controller/store
    
    playerView.removeAll();
    playerView.add(newSwf);
    playerView.doLayout();

  },
  search: function(e,i){
    var queryStr = this.getSearchCombo().getValue(),
    store = this.getVideosStore();
    store.load({
      params: {
        'start-index': 11,
        'max-results': 10,
        
        q: queryStr
      }
    });
  }
});
