const btnApply = document.querySelector("#btnApply");
const btnCancel = document.querySelector("#btnCancel");
const txtName = document.querySelector('input[type="text"]');
const chkFavorites = document.querySelectorAll('input[type="checkbox"]');

btnApply.addEventListener("click", () => {
  let count = 0;
  for (const chkFavorite of chkFavorites) if (chkFavorite.checked) count++;
  alert(`${txtName.value}님, 저와 ${count}개의 취향이 같으시네요!`);
});
btnCancel.addEventListener("click", () => {
  txtName.value = "";
  chkFavorites.forEach((chkFavorite) => (chkFavorite.checked = false));
});
