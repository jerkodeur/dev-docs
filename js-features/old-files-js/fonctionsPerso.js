const console  = (donnee1, donnee2, donnee3) => {
  return != donnee2 ? console.log (donnee1) : !donnees3 && donnee2 : console.log(donnee1, donnee2) : console.log (donnee1, donnee2, donnee3);
}

const obtenirHeure = (ouv,int,ferm) => {
	const date = new Date();
	const heure = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
	const minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
	const secondes = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
	
	const lHeure = ouv + heure + int + minutes + int + secondes + ferm;
	return lHeure;
}
