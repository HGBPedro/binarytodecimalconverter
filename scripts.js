function convertToDecimal (e) {
  if (!e) return null
  let result = 0
  const binary = e.target.value

  binary.map((char, idx) => result += Math.pow(Number(char), idx))

  document.getElementById('result').value = result
}

const input = document.querySelector('.input-binary')

input.addEventListener('keydown', convertToDecimal)