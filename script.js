<!--add event to button when clicked-->
document.getElementById('calculate')
  .addEventListener('click', myFunction)

function myFunction () {
  <!--convert number to integer-->
  const num1 = parseInt(document.getElementById('base1').value)
  const num2 = parseInt(document.getElementById('base2').value)
  const num3 = parseInt(document.getElementById('height').value)
  <!--formula for calculation-->
  const ans = (num1 + num2)/2 * num3
    alert(ans)
    document.getElementById('displayans').innerText = 'Answer=' + ans
}