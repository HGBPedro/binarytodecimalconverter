function convertToDecimal (e) {
  if (!e) return null
  let result = 0
  const binary = e.target.value
  const arr = Array.prototype.map

  arr.call(binary,(char, idx) => result += Math.pow((Number(char) * 2), idx))
  // arr.call(binary, (char, idx) => console.log(binary[idx]))

  const res = document.getElementById('result')
  return res.value = result
}

const input = document.querySelector('.input-binary')

input.addEventListener('keydown', convertToDecimal)