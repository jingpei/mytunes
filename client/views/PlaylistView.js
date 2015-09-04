var PlaylistView = Backbone.View.extend({
  el: "div",
  // template: _.template('<p><%= this.model.listName %></p>'),

  initialize: function(){
    this.on('addList', function(){
      console.log('test');
    })
  },

  events: {
    'click #addList': function(){
      this.collection.add(new PlaylistModel($('#playlist').val()));
      $('#playlist').val("");
      this.render();
    }
  },

  render: function() {
      this.$el.append(this.collection.map(function(playlist) {
        return new PlaylistEntryView({model: playlist}).render();
      })
    );
    // debugger;
    // return this.$el.html(this.template);
  }

});