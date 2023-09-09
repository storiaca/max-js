const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

const userId = 'u123';
const user = {
  name: 'Max',
  age: 33,
  hobbies: ['Sports', 'Cooking'],
};

storeBtn.addEventListener('click', () => {
  sessionStorage.setItem('uid', userId);
  localStorage.setItem('user', JSON.stringify(user));
});
retrBtn.addEventListener('click', () => {
  const extarctedId = sessionStorage.getItem('uid');
  const extractedUser = JSON.parse(localStorage.getItem('user'));
  console.log(extractedUser);
  if (extarctedId) {
    console.log('Got the id - ' + extarctedId);
  } else {
    console.log('Could not find id.');
  }
});
