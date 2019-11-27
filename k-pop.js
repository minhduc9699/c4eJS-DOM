async function getIdolData (numberOfIdol) {
  const response = await fetch(`https://kpop-idol.mindx.edu.vn/api/v1/idols?_end=${numberOfIdol}`)
  const data = await response.json()
  return data
}

async function handleSubmit() {
  const container = document.getElementById('container')
  console.dir(container)
  const numberIdol = document.getElementById('number-idol').value;
  const data = await getIdolData(numberIdol);
  for (let i = 0; i < data.data.length; i += 1) {
    const iDol = data.data[i]
    container.innerHTML += `<p id="${iDol._id}">stage name: ${iDol.stageName}</p>`
  }
}

function main() {
  const button = document.getElementById('submit')
  button.addEventListener('click', handleSubmit)
}

main(); //start web script
