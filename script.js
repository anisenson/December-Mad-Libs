document.getElementById('generateMadLib').addEventListener('click', function () {
    let adjective = prompt('Enter an adjective');
    let noun = prompt('Enter a noun');
    let pronoun = prompt('Enter a pronoun')
    let verb = prompt('Enter a verb');
    let adverb = prompt('Enter an adverb');

    let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun}`;

    let madLibOutputDiv = document.getElementById('madLibOutput');
    madLibOutputDiv.innerHTML = `<p>${story}</p>`;
});
