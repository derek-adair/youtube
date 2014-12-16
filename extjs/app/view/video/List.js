Ext.define('YT.view.video.List' ,{
    extend: 'Ext.grid.Panel',
    alias: 'widget.videoList',
    store: 'Videos',
    initComponent: function() {
        this.columns = [
            {header: 'Title',  dataIndex: 'title',  flex: 1},
            {header: 'Published',  dataIndex: 'published', xtype: 'datecolumn', format: 'd/m/y h:i:s A', flex: 1},
            {header: 'content', dataIndex: 'content', flex: 1}
        ];

        this.callParent(arguments);
    }
});
