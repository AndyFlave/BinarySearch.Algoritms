const $button = document.querySelector('.form__btn')
const $input = document.querySelector('.form__input')
const $resultBox = document.querySelector('.form__result')

let users = [
  {
    name: 'Andy',
    age: 25,
  },

  
]

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

function generateName(quantity) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let name = ''

  for (let i = 0; i < quantity; i++) {
    name += alphabet[getRandomArbitrary(1, 26)]
  }

  return name
}

function generateRandomUsers(quantity) {
  for (let i = 0; i < quantity; i++) {
    users.push({
      name: generateName(getRandomArbitrary(3, 6)),
      age: getRandomArbitrary(5, 80)
    })
  }
}

generateRandomUsers(10000000)

console.log('users', users)

function binarySearch(list, item) {
  // ...
}


$button.addEventListener('click', function() {
  console.time('search')
  let foundUser = users.find(el => el.name.toLocaleLowerCase() === $input.value.toLocaleLowerCase())
  console.timeEnd('search')

  if (foundUser) {
    $resultBox.innerHTML = `Пользователь <strong>${foundUser.name}</strong> найден.`

    return
  }

  $resultBox.innerHTML = `Пользователя <strong>${$input.value}</strong> нет в базе данных.`
})

// $input.addEventListener('input', function(event) {
//   console.log('input', $input.value)
// })