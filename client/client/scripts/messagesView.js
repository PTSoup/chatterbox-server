var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {
    // remove the old chats
    $('.chat').remove();
    // declare/set the active room
    var activeRoom = RoomsView.$select.val() || undefined;
    // ajax call for that room
    Parse.readAll((data)=>{
      data.results.forEach(message => {
        MessagesView.renderMessage(message);
      });
    }, activeRoom);
  },

  renderMessage: function(message) {

    if (!message.text) {
      return;
    }

    message.roomname = message.roomname || '';
    message.text = MessagesView.escapeHtml(message.text);

    message.username = message.username ? message.username : "Anonymous";
    message.username = MessagesView.escapeHtml(message.username);

    if (Friends[message.username]) {
      message.friendStatus = 'friend';
    } else {
      message.friendStatus = '';
    }
    MessagesView.$chats.append(MessageView.render(message));
    Friends.addHandler();
  },

  escapeHtml: function(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
};