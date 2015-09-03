// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults : {
    count: 0,
    upvote: false
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    this.trigger('enqueue', this);
  },
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  removeFromQueue: function(){
    this.trigger('removeFromQueue', this);
  },
  toggleUpvote: function(){
    if(this.get('upvote') === false) {
      this.set('upvote', true);
    } else{ 
      this.set('upvote', false);
    }
    this.trigger('toggleUpvote', this);
  }



});
