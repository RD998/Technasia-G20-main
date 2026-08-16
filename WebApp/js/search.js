

if (document.getElementById('search').value.length === 0){
    document.getElementById('recom').style.display = "block";
}

function showCustomPrompt() {
    var username = sessionStorage.getItem('username');
    if (!username) {
        var promptContainer = document.createElement('div');
        promptContainer.className = 'custom-prompt-container';

        var promptMessage = document.createElement('p');
        promptMessage.textContent = "What's Your Name ?";

        var inputField = document.createElement('input');
        inputField.type = 'text';

        var submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';

        submitButton.addEventListener('click', function() {
        var name = inputField.value.trim();
        if (name !== '') {
            sessionStorage.setItem('username', name);
            displayUsername(name);
            promptContainer.remove();
        }
});

    promptContainer.appendChild(promptMessage);
    promptContainer.appendChild(inputField);
    promptContainer.appendChild(submitButton);

    document.body.appendChild(promptContainer);
    inputField.focus();
    } else {
        displayUsername(username);
    }
}

function displayUsername(name) {
    var usernameElement = document.getElementById('username');
    usernameElement.textContent = name;
}

window.onload = showCustomPrompt;
