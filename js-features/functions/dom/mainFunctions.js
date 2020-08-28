// <--- Recupère la position d'un élément sur une page web 
function offset(element) {
	    var rect = element.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}
// Exemple: elementLeftPosition = offset(element).left --->

// <--- Longueur et largeur de l'écran
screenSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}
// Exemple: screenWidth = screenSize().width -->
