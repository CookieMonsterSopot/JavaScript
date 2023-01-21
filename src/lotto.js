let birthDay = parseInt(prompt("Your birthday: ddmmyy", ""));

let isoDate = new Date().toISOString().substring(0, 10);

if (
  localStorage.getItem(birthDay) === null ||
  JSON.parse(localStorage.getItem(birthDay)).date !== isoDate
) {
  let numRes = [];

  for (let i = 0; i < birthDay; i++) {
    let numbers = [];

    for (let j = 0; j < 6; j++) {
      let number = Math.floor(Math.random() * 49) + 1;

      if (!numbers.includes(number)) {
        numbers.push(number);
      } else {
        j--;
      }
    }

    numRes.push(...numbers);
  }

  const tabNum = {};

  for (let i = 0; i < numRes.length; i++) {
    const num = numRes[i];
    if (tabNum[num]) {
      tabNum[num]++;
    } else {
      tabNum[num] = 1;
    }
  }
  const mostFrequentNumbers = Object.keys(tabNum)
    .sort((a, b) => tabNum[b] - tabNum[a])
    .slice(0, 6);
  const tabFin = [];
  tabFin.push(mostFrequentNumbers);

  let toLocalStorage = {
    numbers: tabFin,
    date: isoDate,
  };

  localStorage.setItem(birthDay, JSON.stringify(toLocalStorage));
  document.write(
    "<p>Your luckie numbers today: <br /></p>",
    toLocalStorage.numbers
  );
} else {
  let numbersFromLocalStorage = JSON.parse(
    localStorage.getItem(birthDay)
  ).numbers;
  document.write(
    "<p>Your luckie numbers today: <br /></p>",
    numbersFromLocalStorage
  );
}
