Ext.define('YT.view.video.Player', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.videoPlayer',
  items:[{
    xtype: 'flash',
    url: 'https://www.youtube.com/v/E5svXAZ9-Qk?version=3&f=videos&app=youtube_gdata&enablejsapi=1&playerapiid=ytplayer' 
  }]
});
