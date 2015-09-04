var PlaylistModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('listName', params);
    this.set('tracks', []);
  },

  savePlaylist : function() {
    this.trigger('savePlaylist', this);
  }, 

  addList : function(song){
    this.trigger('addList', this);
    console.log(this.get('tracks'));
  }


});
  