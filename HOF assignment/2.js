const generateNumDelay = () => {
  let delay = 3;
  let number = undefined;
  console.log(`${delay} Seconds Left...`);

  setTimeout(() => {
    number = Math.floor(Math.random() * (100 - 0) + 0);
  }, delay * 1000);

  let checkAndShow = setInterval(() => {
    if (number === undefined) {
      delay--;
      console.log(`${delay} Seconds Left...`);
    } else {
      clearInterval(checkAndShow);
      console.log(number);
    }
  }, 1000);
};

generateNumDelay();
