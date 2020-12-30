const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  messageOne.textContent = 'Fetching forecast information';
  messageTwo.textContent = '';
  const location = encodeURIComponent(search.value);
  const url = `/weather?address=${location}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        return;
      }
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
    });
});
