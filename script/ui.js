function UI() {}

UI.prototype.active = function(element, className){
  newElement = document.getElementById(element);

  newElement.classList.add(className);
}

UI.prototype.close = function(element, className){
  newElement = document.getElementById(element);
  
  newElement.classList.remove(className);
}