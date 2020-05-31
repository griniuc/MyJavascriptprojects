console.log("Here");

// Scrie un program ce va inlocui textul/cuvântul introdus
// în input-ul Left Word, cu cel introdus în input-ul Right Word.
// Toate cuvintele găsite trebuie înlocuite cu cel introdus în
// Right Word input.
window.handleClick = function handleClick() {
  let leftWord = document.getElementById("inputLeft").value;
  let rightWord = document.getElementById("inputRight").value;
  let initText = document.getElementById("text").innerText;

  while (initText.includes(leftWord)) {
    initText = initText.replace(leftWord, rightWord);
    document.getElementById("text").innerHTML = initText;
  }
};
