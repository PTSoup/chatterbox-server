
var Friends = {
  
  addHandler: function() {
    $('.username').click(function() {
      Friends.toggleStatus($(this).text());
    });
  },

  toggleStatus: function(username) {
    if (!Friends[username]) {
      Friends[username] = true;
      MessagesView.render();
    }
  }

};