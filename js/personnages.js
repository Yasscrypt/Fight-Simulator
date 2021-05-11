import Personnage from "./classPrincipale.js";
/****************************************************Class de mon 3eme personnage******************************************************** */
class Magicien extends Personnage {
	constructor(pseudo) {
		super(pseudo, "magicien", 170, 90);
		this.niveauM = 1;
	}

	get informations() {
		return `Il reste ${this.sante} points à ${this.pseudo}. ${this.pseudo} st au niveau ${this.niveauM}.`;
	}

	evoluer() {
		this.niveauM++;
		return `${this.pseudo} passe au niveau ${this.niveauM} !`;
	}

	attaquer(personnage) {
		personnage.sante -= this.attaque;

		return `${this.pseudo} attaque ${personnage.pseudo} en lançant un sort 
		(${this.attaque} dégâts) ${this.evoluer()} / ${personnage.verifierSante()}`;
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

export default Magicien;
