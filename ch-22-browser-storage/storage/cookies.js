const storeBtn = document.getElementById('store-btn');
const retrBtn = document.getElementById('retrieve-btn');

storeBtn.addEventListener('click', () => {
  const userId = 'u123';
  const user = {
    name: 'Max',
    age: 33,
  };
  //document.cookie = `uid=${userId}; max-age=2`; // ovo max-age znaci cooke traje 2 sekunde
  document.cookie = `uid=${userId}; max-age=360`; // ovo max-age znaci cooke traje 3 minuta

  //document.cookie = `uid=${userId}; expires=Fri, 31 Dec 9999 23:59:59 GMT;`; // ovo expires treba da dobije datum dokle ce da traje cookie

  document.cookie = `user=${JSON.stringify(user)}`;
});
retrBtn.addEventListener('click', () => {
  const cookieData = document.cookie.split(';');
  const data = cookieData.map((i) => {
    return i.trim();
  });
  console.log(data[1].split('=')[1]); // user value

  // trebalo bi da u ovom slucaju radimo sa includes metodom, da pretrazimo key od podataka a ne ovako sa indeksima
  // console.log(data[1].includes('').split('=')[1]);
});
