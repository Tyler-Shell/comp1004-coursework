var username = ''

function storeInputValue() {
    const inputElement = document.getElementById('Username');
    const inputValue = inputElement.value;
    username = inputValue;
}

function returnUsername() {
    return username;
}