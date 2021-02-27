function UI() {}

UI.prototype.active = function(element, className){
  newElement = document.getElementById(element);

  newElement.classList.add(className);
}

UI.prototype.close = function(element, className){
  newElement = document.getElementById(element);
  
  newElement.classList.remove(className);
}

UI.prototype.switchClass = function(element, removeClass, addClass){
  element.classList.remove(removeClass);
  element.classList.add(addClass);
}