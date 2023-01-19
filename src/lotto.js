let birthDay = parseInt(prompt("Your birthday: ddmmyy", ""));
if (localStorage.getItem(birthDay) === null) {
  let numRes = [];

  for (let i = 0; i < 300377; i++) {
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

  localStorage.setItem(birthDay, ...tabFin);
  document.write("Your luckie numbers: ", ...tabFin);
} else {
  document.write("Your luckie numbers: ", ...localStorage.getItem(birthDay));
}
