Ext.define('YT.model.Video', {
  extend: 'Ext.data.Model',
  autoLoad: true,
  //hack to compensate for weird auto inserting ID
  idProperty: undefined,
  fields: [
    {name: 'title', mapping: 'title.$t'},
    {name: 'published', mapping: 'published.$t', type: 'date'},
    {name: 'content', mapping: 'content.src'},
    {name: 'id', type: 'String'}
  ]
});
