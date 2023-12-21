document.getElementById('generateMadLib').addEventListener('click', function () {
    let pluralfood1 = prompt('(24) Enter a Plural Food');
    let verb1 = prompt('(23) Enter a verb');
    let noun1 = prompt('(22) Enter a noun');
    let ingredient1 = prompt('(21) Enter an ingredient')
    let ingredient2 = prompt('(20) Enter an ingredient')
    let ingredient3 = prompt('(19) Enter an ingredient')
    let ingredient4 = prompt('(18) Enter an ingredient')
    let ingredient5 = prompt('(17) Enter an ingredient')
    let noun2 = prompt('(16) Enter a noun');
    let verb2 = prompt('(15) Enter a verb');
    let noun3 = prompt('(14) Enter a noun');
    let shape = prompt('(13) Enter a shape')
    let noun4 = prompt('(12) Enter a noun');
    let number1 = prompt('(11) Enter a number');
    let measureoftime1 = prompt('(10) Enter a measure of time');
    let number2 = prompt('(9) Enter a number');
    let pluralfood2 = prompt('(8) Enter a Plural Food');
    let number3 = prompt('(7) Enter a number');
    let measureoftime2 = prompt('(6) Enter a measure of time');
    let color = prompt('(5) Enter a color');
    let noun5 = prompt('(4) Enter a noun');
    let verb3 = prompt('(3) Enter a verb');
    let adjective = prompt('(2) Enter an adjective');
    let pluralfood3 = prompt('(1) Enter a Plural Food');
   
    let story = `Let's make some ${pluralfood1} for the holidays! First, we need to ${verb1} all of the ingredients in a ${noun1}. We add  ${ingredient1},  ${ingredient2}, then ${ingredient3}  ${ingredient4} and  ${ingredient5}. We get a big ${noun2} to ${verb2} the batter. Now we can put the batter on the ${noun3} and shape it into a ${shape}. We are now ready to bake, let's put it in the ${noun4} for  ${number1} ${measureoftime1} at  ${number2} degrees. After you take the ${pluralfood2} out, you have to let them cool for ${number3} ${measureoftime2} before we can add frosting. After waiting, we can add ${color} frosting and make it look like a ${noun5}. We are now ready to ${verb3} the ${adjective} ${pluralfood3}`;

    let madLibOutputDiv = document.getElementById('madLibOutput');
    madLibOutputDiv.innerHTML = `<p>${story}</p>`;
});
