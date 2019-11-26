const title = document.getElementById('title')
console.log(title)
title.innerText = 'DOM'
title.addEventListener('click', function() {
  title.style.color = 'red'
})