/****************************************************Class principale******************************************************** */

class Personnage {
	constructor(pseudo, classe, sante, attaque) {
		this.pseudo = pseudo;
		this.classe = classe;
		this.sante = sante;
		this.attaque = attaque;
	}
	verifierSante() {
		if (this.sante <= 0) {
			this.sante = 0;
			return `${this.pseudo} a perdu !`;
		} else {
			return `${this.pseudo} s'accroche !`;
		}
	}
}

export default Personnage;
