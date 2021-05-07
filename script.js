
document.getElementById('calculate')
  .addEventListener('click', myFunction)

function myFunction () {
  const num1 = parseInt(document.getElementById('base1').value)
  const num2 = parseInt(document.getElementById('base2').value)
  const num3 = parseInt(document.getElementById('height').value)

  const ans = (num1 + num2) / 2 * num3
  document.getElementById('displayans').innerText = 'Answer=' + ans
}
