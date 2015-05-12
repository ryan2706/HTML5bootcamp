document.addEventListener('DOMContentLoaded', function() {
    var inputBox = document.getElementById('inputBox');
    var sendButton = document.getElementById('sendButton');
    var messageBox = document.querySelector('#messageBox');
    
    function addMessage() {
        var p = document.createElement('p');
        p.textContent = inputBox.value;
        messageBox.appendChild(p);
        inputBox.value = '';
    };
    
    sendButton.addEventListener('click', addMessage);
    inputBox.addEventListener('keyup', function(e) {
       if(e.keyCode === 13) {
           addMessage();
       }
    });
    
    sendButton.addEventListener('click', addMessage());
});