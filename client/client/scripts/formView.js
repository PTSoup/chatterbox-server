var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    var message = {};

    message.text = $('#message').val();
    message.username = App.username.split('%20').join('');
    message.roomname = RoomsView.$select.val();

    event.preventDefault();
    Parse.create(message, MessagesView.render);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};