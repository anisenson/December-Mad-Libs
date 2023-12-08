let adjective = prompt('enter an adjective')
let noun = prompt('enter a noun')
let verb = prompt('enter a verb')
let adverb = prompt('enter an adverb')

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun}`

let madLibOutputDiv = document.getElementById(`madLibOutput`)

madLibOutputDiv.innerHTML = `<p>${story}</p>`