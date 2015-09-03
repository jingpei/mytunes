// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td> \
                        <td class="song"><%= title %></td> \
                        <td id="count"><%= count %></td> \
                        <td><button id="up"><%- upvote ? \'Downvote\' : \'Upvote\'%></button></td>'),

  initialize: function() {
    this.model.on('change:count', this.render, this);
    this.model.on('change:upvote', this.render, this);
    this.model.on('change:likeCount', this.render, this);
  },

  events: {
    'click button': function(){
      this.model.toggleUpvote();
    },
    'click .song': function() {
      this.model.enqueue();
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
