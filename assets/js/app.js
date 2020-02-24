const gameBoard = document.getElementById("gameboard");
/*const players = document.getElementsByClassName("player");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");*/
let counter; // cree un compteur
let cpt = 0; // nb de manches jouees
let scoreplayer1 = 0; // score player1
let scoreplayer2 = 0; // score du cpu ou player2
let intervalId = null;

// tableau de choix
let tabChoice = ["pierre", "feuille", "ciseau"];

//console.log(tabChoice);
//Au chargement de la page
// crées des elements et afficher  mode solo ou deux joueur
window.onload = function() {
  //cree la fenetre au chargement de la page
  let fenetre = document.createElement("div");
  fenetre.classList.add("fenetre");
  gameBoard.appendChild(fenetre);
  // cree deux bouton de selection dans la fenetre
  let button = document.createElement("input");
  button.classList.add("button");
  button.type = "submit";
  button.value = "Solo";
  fenetre.appendChild(button);
  //deuxieme bouton
  let button1 = document.createElement("input");
  button1.classList.add("button1");
  button1.type = "submit";
  button1.value = "2-joueurs";
  fenetre.appendChild(button1);
  // div avec consignes et regles
  let consignes = document.createElement("div");
  consignes.classList.add("consignes");
  gameBoard.appendChild(consignes);
  consignes.innerHTML =
    "Choisissez un mode !<br><br>Le jeu va se lancer apres le compte a rebour ";

  //affichage d'une image fight pendant 1sec a la fin du compte a rebourd
  function finish() {
    clearInterval(intervalId);
    let fight = document.createElement("div");
    fight.classList.add("fight");
    gameBoard.appendChild(fight);
    setTimeout(function() {
      fight.remove("");
    }, 1000);
    secCompteur();
  } // fin de la function finish




  counter = 3;
  // decomptes
  function decomptes(action) 
  {
	// if(action = "restart") counter = 3;
	// else counter--;
	counter--;

    if (counter == 0) finish();
    else {
      let decompte = document.createElement("div");
      decompte.classList.add("decompte");
      gameBoard.appendChild(decompte);
      decompte.innerHTML = counter;
      setTimeout(function() {
        decompte.remove("");
      }, 1000);
    }
  } // fin de la function decomptes

  // l'appel du demarage du compte a rebourd

  function start1() {
	if(intervalId) clearInterval(intervalId);
	intervalId = setInterval(decomptes, 1000);

  } // fin de la fonction start1

  button.onclick = function() {
    gameBoard.removeChild(fenetre);
    gameBoard.removeChild(consignes);
    //afficher une liste de choix au joueur à selectionné
    setTimeout(function() {
      let createList = document.createElement("div");
      createList.classList.add("list");
      createList.innerHTML +=
        "<button type='button' id='btnFeuille'>Feuille</button><br><button type='button' id='btnPierre'>Pierre</button><br><button type='button' id='btnCiseau'>Ciseau</button>";

      gameBoard.appendChild(createList);

      let btnFeuille = document.getElementById("btnFeuille");
      let btnPierre = document.getElementById("btnPierre");
      let btnCiseau = document.getElementById("btnCiseau");

      //donner une action pour chaques boutons
      btnFeuille.onclick = function() {
        let feuille = document.createElement("div");
        feuille.classList.add("feuille");
        feuille.innerHTML = "feuille";
        feuille.setAttribute("value", "feuille");
        feuille.id = "player1";
        gameBoard.appendChild(feuille);
        createList.removeChild(btnPierre);
        createList.removeChild(btnCiseau);
		feuille.style.left = "20" + "%";
		console.log(document.getElementById("player1").getAttribute("value"));
		
      };

      btnPierre.onclick = function() {	
        let pierre = document.createElement("div");
        pierre.classList.add("pierre");
        pierre.innerHTML = "pierre";
        pierre.setAttribute("value", "pierre");
        pierre.id = "player1";
        gameBoard.appendChild(pierre);
        createList.removeChild(btnFeuille);
        createList.removeChild(btnCiseau);
		pierre.style.left = "20" + "%";
		console.log(document.getElementById("player1").getAttribute("value"));
		
      };
      btnCiseau.onclick = function() {
        let ciseau = document.createElement("div");
        ciseau.classList.add("ciseau");
        ciseau.innerHTML = "ciseau";
        ciseau.setAttribute("value", "ciseau");
        ciseau.id = "player1";
        gameBoard.appendChild(ciseau);
        createList.removeChild(btnPierre);
        createList.removeChild(btnFeuille);
		ciseau.style.left = "20" + "%";
		console.log(document.getElementById("player1").getAttribute("value"));
		
      };
    }, 4000);
    setTimeout(() => {
      // variable pour tirer un choix du tableau au hasard
      let randTab = tabChoice[Math.floor(Math.random() * tabChoice.length)];
      //let randTab2 = Math.floor(Math.random() * tabChoice.length);
      /* console.log(randTab); // selon l'élement du tableau tiré
		console.log(randTab2) // selon un nombre*/
      // crées élements par rapport a son index tirer
      if (randTab === "feuille") {
        let feuille = document.createElement("div");
        feuille.classList.add("feuille");
        feuille.setAttribute("value", "feuille");
        feuille.id = "player2";
        feuille.innerHTML = "feuille";
		gameBoard.appendChild(feuille);
		console.log(document.getElementById("player2").getAttribute("value"));
      }

      if (randTab === "pierre") {
        let pierre = document.createElement("div");
        pierre.classList.add("pierre");
        pierre.setAttribute("value", "pierre");
        pierre.id = "player2";
        pierre.innerHTML = "pierre";
		gameBoard.appendChild(pierre);
		console.log(document.getElementById("player2").getAttribute("value"));
      }

      if (randTab === "ciseau") {
        let ciseau = document.createElement("div");
        ciseau.classList.add("ciseau");
        ciseau.setAttribute("value", "ciseau");
        ciseau.id = "player2";
        ciseau.innerHTML = "ciseau";
		gameBoard.appendChild(ciseau);
		console.log(document.getElementById("player2").getAttribute("value"));
      }

      // crées des conditions pour les regles du jeu

      if (
        document.getElementById("player1").getAttribute("value") != null &&
        document.getElementById("player2").getAttribute("value") != null
      ) {
        if (
          document.getElementById("player1").getAttribute("value") ===
          document.getElementById("player2").getAttribute("value")
        ) {
          console.log("égalité!");
        }
      }

      if (
        document.getElementById("player1").getAttribute("value") ===
          "feuille" &&
        document.getElementById("player2").getAttribute("value") === "pierre"
      ) {
        console.log("gagner");
      }
      if (
        document.getElementById("player1").getAttribute("value") === "pierre" &&
        document.getElementById("player2").getAttribute("value") === "ciseau"
      ) {
        console.log("gagner");
      }
      if (
        document.getElementById("player1").getAttribute("value") === "ciseau" &&
        document.getElementById("player2").getAttribute("value") === "feuille"
      ) {
        console.log("gagner");
      }
      if (
        document.getElementById("player1").getAttribute("value") === " " &&
        document.getElementById("player2").getAttribute("value")
      ) {
        console.log("perdu!");
      } else {
        console.log("perdu");
      }
    }, 7000); //donner le resultat apres le delai de tous les compteurs

    start2();
  }; // fin de la fonction button.onclick

  button1.onclick = function() {
    gameBoard.removeChild(fenetre);
    gameBoard.removeChild(consignes);
    start1();
  }; // fin de la fonction button1.onclick
}; //fin de la fonction window.onload

// apres les 6 sec du premier compteur relancer une function seccompteur recommence pour la phase de jeu
function secCompteur() {
  function finish() {
    clearInterval(intervalId);

    console.log("yo");

    let buttonAgain = document.createElement("input");
    buttonAgain.setAttribute("type", "button");
    buttonAgain.setAttribute("value", "Next Round?!");
    buttonAgain.classList.add("buttonAgain");
    buttonAgain.id = "buttonAgain";
    gameBoard.appendChild(buttonAgain);
    buttonAgain.onclick = function() {
      //donner les actions pour relancer le game
      gameBoard.removeChild(document.getElementById("player1"));
	  gameBoard.removeChild(document.getElementById("player2"));
	  counter = 3;
      start1();
      console.log(document.getElementById("player1"));
    };
  }
  counter = 4;
  function decomptes() {
    counter--;
    if (counter == 0) finish();
    else {
      let decompte = document.createElement("div");
      decompte.classList.add("decompte");
      gameBoard.appendChild(decompte);
      decompte.innerHTML = counter;
      setTimeout(function() {
        decompte.remove("");
      }, 1000);
    }
  }
  function start2() {
    intervalId = setInterval(decomptes, 1000);
  }

  start1();
} /*fin de la function secCompteur*/
