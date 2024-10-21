var messages = [];

var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//Pre-set messages
var data = [
    {
        type: messageType.in,
        user: 'Your Dog',
        message: 'Let me outside, bro.'
    },
    {
        type: messageType.in,
        user: 'Your Dog',
        message: "Did you hear that?"
    },
    {
        type: messageType.out,
        user: 'You',
        message: "No?"
    },
    {
        type: messageType.in,
        user: 'Steve (Minecraft)',
        message: "Hold up, I'm mining, and crafting."
    },
    {
        type: messageType.out,
        user: 'You',
        message: "Chat24's broken let me refresh"
    },
    {
        type: messageType.in,
        user: 'Your Dog',
        message: "Aight, man"
    }
];

//Msg object
function Message(type, user, message) {
    this.type =  type;
    this.user = user;
    this.message = message;
}

//Creates HTML element for message
function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ': ' + message.message
    );

    var messageEl = document.createElement('p');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

//Creates msg data for user messages
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    switch (event.target.id) {
        case 'send-button':
            user = 'You';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Your Dog';
            type = messageType.in;
            break;
        default:
            user = 'Unknown';
            type = messageType.unknown;
    }

    if (messageInput.value != '') {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData() {
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        console.log('Message "' + message.message + '" by user ' + message.user + ' has been loaded');
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();