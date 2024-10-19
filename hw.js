// // Task 1
const hz = prompt("choto") + prompt("choto");
if (hz) {
  alert("Обидва поля заповнені");
} else {
  alert("Не всі поля заповнені");
}
// // Task 2
const hs = Number(prompt("bla bla bla")) + Number(prompt("ble ble ble"));
if (hs > 10) {
  alert("Сума більша за 10");
} else {
  alert("Сума менша або дорівнює 10");
}
// // Task 3
const inputik = prompt("Введіть текст");
if (inputik.includes("JavaScript")) {
  alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}
// // Task 4
const hs2 = Number(prompt("Введіть число"));
if (hs2 > 10 && hs2 < 20) {
  alert("Число входить в діапазон від 10 до 20");
} else {
  alert("Число не входить в діапазон від 10 до 20");
}
// Task 5
const lame = prompt("Введіть свою назву");
console.log(lame);
const email = prompt("Введіть свою пошту");
console.log(email);
const parol = prompt("Введіть свій пароль");
console.log(parol);
if (lame.length >= 3) {
  alert("Ви перенаправлені на іншу сторінку!");
} else if (email.includes("@gmail.com" || "@hotmail.com" || "@ukr.net")) {
  alert("Ви перенаправлені на іншу сторінку!");
} else if (parol.length >= 6) {
  alert("Ви перенаправлені на іншу сторінку!");
} else {
  alert("Помилка!")
}
