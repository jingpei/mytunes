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
      this.remove(this.at(0));
      if(this.length >= 1){
        this.playFirst();  
      }
    }, this);

    this.on('removeFromQueue', function(ev){
      if(this.length > 1){
        if(this.at(0) === ev) {
          this.trigger('ended');
        } else {
          this.remove(ev);
        }
      }
    }, this);

  },

  playFirst: function(){
    this.at(0).play();
    this.at(0).set('count', (this.at(0).get('count') + 1))
  },


});