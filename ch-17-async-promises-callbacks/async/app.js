const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });

  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

async function trackUserHandler() {
  //let positonData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);
  // getPosition()
  //   .then((posData) => {
  //     positonData = posData;
  //     return setTimer(2000);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return "on we go...";
  //     // ovaj catch hvata sve then funckije pre njega i onda se nastavlja izvsavanje ako ima the posle njega
  //   })
  //   .then((data) => {
  //     console.log(data, positonData);
  //   });

  setTimer(1000).then(() => {
    console.log("Timer Done!");
  });

  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);

// event loop is part of the browser
