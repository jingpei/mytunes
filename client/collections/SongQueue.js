// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('add', function(){
      if(this.length <= 1){
        this.playFirst();
      };
    }, this);

    this.on('ended',function(){
      //to remove first song
      this.shift();
      //then play next
      if(this.length >= 1) {
        this.playFirst();  
      }
    }, this);

    this.on('dequeue', function(){
      this.remove();
    }, this);

  },

  playFirst: function(){
    this.at(0).play();
  },


});