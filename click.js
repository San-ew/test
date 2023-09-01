const box = document.querySelectorAll('#box');

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener('click', function() {
    alert(`이것은 ${i + 1}번째 박스입니다.`);
  });
}
