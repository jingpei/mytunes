// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
  className: "queueTable",

  initialize: function() {
    this.render();
    
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  events: {
    // 'click #addList': function(){
    //   debugger;
    //   this.trigger('addList', this);
    //   console.log('hello')
    // }
  },

  render: function() {
    this.$el.children().detach();

    this.$el.append('<th colspan="2">Song Queue<input type="text" name="playlistName" id="playlist"></input>\
                  <button id="addList">+</button></th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

