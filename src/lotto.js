let birthDay = parseInt(prompt("Your birthday: ddmmyy", ""));
let isoDate = new Date().toISOString().substring(0, 10);

// --- check if file exist in local storage and current date ---

if (
  localStorage.getItem(birthDay) === null ||
  JSON.parse(localStorage.getItem(birthDay)).date !== isoDate
) {
  let numRes = [];

  // --- generate numbers "birthday date" times ---

  for (let i = 0; i < birthDay; i++) {
    let numbers = [];

    // --- generate 6 numbers 1-49 ---

    for (let j = 0; j < 6; j++) {
      let number = Math.floor(Math.random() * 49) + 1;

      // --- chaeck if number exist in 6 digits array ---

      if (!numbers.includes(number)) {
        numbers.push(number);
      } else {
        j--;
      }
    }
    numRes.push(...numbers);
  }
  const tabNum = {};

  // --- count how manny times numbers appear in array ---

  for (let i = 0; i < numRes.length; i++) {
    const num = numRes[i];
    if (tabNum[num]) {
      tabNum[num]++;
    } else {
      tabNum[num] = 1;
    }
  }

  // --- sort most frequent numbers and put it to the result ---

  const mostFrequentNumbers = Object.keys(tabNum)
    .sort((a, b) => tabNum[b] - tabNum[a])
    .slice(0, 6);
  const tabFin = [];
  tabFin.push(mostFrequentNumbers);

  // --- create object JSON with your numbers and current date ---

  let toLocalStorage = {
    numbers: tabFin,
    date: isoDate,
  };

  // --- print your numbers and save in local storage ---

  localStorage.setItem(birthDay, JSON.stringify(toLocalStorage));
  document.write(
    "<p>Your luckie numbers today: <br /></p>",
    toLocalStorage.numbers
  );
} else {
  // --- download numbers from local storage if date is same as current

  let numbersFromLocalStorage = JSON.parse(
    localStorage.getItem(birthDay)
  ).numbers;
  document.write(
    "<p>Your luckie numbers today: <br /></p>",
    numbersFromLocalStorage
  );
}
