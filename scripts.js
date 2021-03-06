function convertToDecimal (e) {
  if (!e) return null
  let result = 0
  const binary = e.target.value

  result = binary.split('').reverse().reduce((prev, val, idx) => {
    return prev + (val * Math.pow(2, idx))
  }, 0)

  const res = document.getElementById('result')
  return res.value = result
}

function maskToBinary (e) {
  return e.target.value = e.target.value.replace(/[^0-1]/g, '')
}

const input = document.querySelector('.input-binary')

input.addEventListener('input', maskToBinary)
input.addEventListener('keyup', convertToDecimal)