const myButton = document.getElementById('myButton');
const content = document.getElementById('content');

myButton.addEventListener('click', function() {
    content.style.display = 'flex';

    myButton.style.display = 'none';

});