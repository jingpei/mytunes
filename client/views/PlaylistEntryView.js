var PlaylistEntryView = Backbone.View.extend({
  tagName: 'p', 
  template: _.template('<%= listName %>'),

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
})