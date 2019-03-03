App.chat = App.cable.subscriptions.create("ChatChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log('receive');
    return $('#chat-index').append('<li>' + data.message + '</li>');
  },

  post: function(message) {
    return this.perform('post', { message: message });
  }
}, $(document).on('keypress', '[data-behavior~=chat_post]', function(event) {
  if (event.keyCode === 13) {
    var chatForm = $('#chat-form');
    App.chat.post(chatForm.val());
    return
  }
}));
