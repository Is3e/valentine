let yes = document.querySelector('.yesBox');
let no = document.querySelector('.noBox');
let modifs = document.querySelector('.texte');

console.log(modifs);
console.log(no);

let compteur = 0;
const options=["Vraiment ? ", "t'est sûre ?", "Archi sûre ? ", "...", " .."];

no.addEventListener("click", function(){
    compteur < options.length
    ?(modifs.textContent = options[compteur], compteur++)
    :  compteur === options.length
        ? (alert("Ok c'est bon arrête ou je push ton windows 32"), compteur++)
        : null;
})

let img = document.querySelector(".milk");
let h1 = document.querySelector("h1");
let okTiers = "Yeyyy gros bisous de Blois <3"


yes.addEventListener("click", function(){
    h1.textContent = okTiers;
    let p = document.querySelector("p");
    img.src = "images/milkNmochaLove.gif";

    yes.style.display = 'none';
    no.style.display = 'none';
    p.style.display = 'none';
})


/*

document.getElementById('monBouton').style.display = 'none';

let compteurClics = 0;

function changerTexte() {
  const texteElement = document.getElementById("texteChangeant");
  
  compteurClics < 5
    ? (texteElement.textContent = reponses[Math.floor(Math.random() * reponses.length)], compteurClics++)
    : compteurClics === 5
      ? (alert("Vous avez cliqué 5 fois !"), compteurClics++)
      : null;

////////////////////
//////
////////////////////

const reponses = [
  "Bonjour !",
  "Comment allez-vous ?",
  "Belle journée, n'est-ce pas ?",
  "Que puis-je faire pour vous ?",
  "Merci de votre visite !"
];

let compteurClics = 0;

function changerTexte() {
  const texteElement = document.getElementById("texteChangeant");
  
  compteurClics < reponses.length
    ? (texteElement.textContent = reponses[compteurClics], compteurClics++)
    : compteurClics === reponses.length
      ? (alert("Vous avez parcouru toutes les réponses !"), compteurClics++)
      : null;
}


*/