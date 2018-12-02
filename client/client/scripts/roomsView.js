var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
    //this.$button.click(Rooms.add());
    RoomsView.addRoom();
    RoomsView.renderAllRooms();
    RoomsView.roomFilter();
  },

  render: _.template(`
    <option value="<%=room%>"><%=room%></option>
  `),

  renderRoom: function(room) {
    RoomsView.$select.append(RoomsView.render({ room }));
  },

  addRoom: function() {
    RoomsView.$button.click(function() {
      var roomName = prompt("What's the room's name?");
      RoomsView.renderRoom(roomName);
      Rooms.add();
    });
  },

  renderAllRooms: function() {
    Parse.readAll(data => {
      data.results.forEach(message => {
        if (message.roomname && !Rooms[message.roomname]) {
          Rooms[message.roomname] = true;
          RoomsView.renderRoom(message.roomname);
        }  
      });
    });
  },
  
  roomFilter: function() {
    RoomsView.$select.change(function() {
      MessagesView.render();
    });
  }
};