// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    console.log(this.collection);
    _.map(this.collection, function(model){
      var songQueueEntryView = new SongQueueEntryView({model: model});
      songQueueEntryView.render();
    });
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {

  }

});
