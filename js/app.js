import Personnage from "./classPrincipale.js";
/****************************************************Class de mon 2eme personnage******************************************************** */
class Guerrier extends Personnage {
	constructor(pseudo) {
		super(pseudo, "guerrier", 350, 50);
		this.niveauG = 1;
	}
	get informations() {
		return `Il reste ${this.sante} points à ${this.pseudo}. ${this.pseudo} st au niveau ${this.niveauG}.`;
	}
	evoluer() {
		this.niveauG++;
		return `${this.pseudo} passe au niveau ${this.niveauG} !`;
	}
	attaquer(personnage) {
		personnage.sante -= this.attaque;

		return `${this.pseudo} attaque ${personnage.pseudo} en lançant un sort 
		(${this.attaque} dégâts) ${this.evoluer()} / ${personnage.verifierSante()}
		`;
	}

	verifier(personnage) {
		personnage.verifierSante();
	}

	coupSpecial(personnage) {
		personnage.sante -= this.attaque * 2;

		return `${
			this.pseudo
		} attaque avec son coup spécial puissance des arcanes ${personnage.pseudo}  
		(${this.attaque * 2} dégâts)
		${this.evoluer()} / ${personnage.verifierSante()}`;
	}
}

import Magicien from "./personnages.js";
/****************************************************Execution du code ******************************************************** */
function instructions() {
	let choix1 = prompt(
		"Bienvenue dans Fight Simulator \nChoisissez un nom pour le magicien"
	);
	let choix2 = prompt("Choisissez un nom pour le nécromancien");

	let magicien = new Magicien(choix1);

	let guerrier = new Guerrier(choix2);

	let buttonAttaquePerso1 = document.getElementById("attaquePerso1");
	let buttonSuperAttaquePerso1 = document.getElementById("superAttaquePerso1");
	let imagePerso1 = document.getElementById("perso1");
	let infoPerso1 = document.getElementById("infoPerso1");

	let buttonAttaquePerso2 = document.getElementById("attaquePerso2");
	let buttonSuperAttaquePerso2 = document.getElementById("superAttaquePerso2");
	let imagePerso2 = document.getElementById("perso2");
	let infoPerso2 = document.getElementById("infoPerso2");

	let resultat = document.getElementById("resultat");
	let instruction = document.createElement("div");

	function getInfo() {
		infoPerso1.innerHTML = magicien.informations;
		infoPerso2.innerHTML = guerrier.informations;
		if (magicien.sante === 0) {
			infoPerso1.style.backgroundColor = "red";
			infoPerso2.style.backgroundColor = "green";

			confirm(`${magicien.pseudo} a perdu ! Voulez vous recommencer ?`);

			if (true) {
				magicien.sante = 170;
				guerrier.sante = 350;
				infoPerso1.innerHTML = "";
				infoPerso2.innerHTML = "";
				instruction.innerHTML = "";
				resultat.innerHTML = "";
				infoPerso1.style.backgroundColor = "transparent";
				infoPerso2.style.backgroundColor = "transparent";
				imagePerso1.style.height = "300px";
				imagePerso2.style.width = "300px";
				imagePerso2.style.height = "300px";
				instructions();
			}
		} else if (guerrier.sante === 0) {
			infoPerso2.style.backgroundColor = "red";
			infoPerso1.style.backgroundColor = "green";
			confirm(`${guerrier.pseudo} a perdu ! Voulez vous recommencer ?`);
			if (true) {
				magicien.sante = 170;
				guerrier.sante = 350;
				infoPerso1.innerHTML = "";
				infoPerso2.innerHTML = "";
				instruction.innerHTML = "";
				resultat.innerHTML = "";
				infoPerso1.style.backgroundColor = "transparent";
				infoPerso2.style.backgroundColor = "transparent";
				imagePerso1.style.width = "300px";
				imagePerso1.style.height = "300px";
				imagePerso2.style.width = "300px";
				imagePerso2.style.height = "300px";
				instructions();
			}
		}
	}

	getInfo();

	buttonAttaquePerso1.addEventListener("click", () => {
		instruction.innerHTML = magicien.attaquer(guerrier);
		magicien.verifier(guerrier);
		instruction.style.backgroundColor = "gray";
		imagePerso1.style.width = "350px";
		imagePerso1.style.height = "350px";
		imagePerso2.style.width = "300px";
		imagePerso2.style.height = "300px";
		getInfo();
	});
	buttonSuperAttaquePerso1.addEventListener("click", () => {
		instruction.innerHTML = magicien.coupSpecial(guerrier);
		magicien.verifier(guerrier);
		instruction.style.backgroundColor = "gray";
		imagePerso1.style.width = "350px";
		imagePerso1.style.height = "350px";
		imagePerso2.style.width = "300px";
		imagePerso2.style.height = "300px";
		getInfo();
	});
	buttonAttaquePerso2.addEventListener("click", () => {
		instruction.innerHTML = guerrier.attaquer(magicien);
		guerrier.verifier(magicien);
		instruction.style.backgroundColor = "gray";
		imagePerso2.style.width = "350px";
		imagePerso2.style.height = "350px";
		imagePerso1.style.width = "300px";
		imagePerso1.style.height = "300px";
		getInfo();
	});
	buttonSuperAttaquePerso2.addEventListener("click", () => {
		instruction.innerHTML = guerrier.coupSpecial(magicien);
		guerrier.verifier(magicien);
		instruction.style.backgroundColor = "gray";
		imagePerso2.style.width = "350px";
		imagePerso2.style.height = "350px";
		imagePerso1.style.width = "300px";
		imagePerso1.style.height = "300px";
		getInfo();
	});
	resultat.prepend(instruction);
}

instructions();
