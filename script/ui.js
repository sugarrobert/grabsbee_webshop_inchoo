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

UI.prototype.detailsStatus = function(details) {
  const midMQ = window.matchMedia('(max-width: 767px)'),
        largeMq = window.matchMedia('(min-width: 768px)');
  
  details.forEach(detail => {
    if(midMQ.matches) {   
      detail.open = false;
    }

    if(largeMq.matches) {
      detail.open = true;
      detail.addEventListener('click', (e) => {
        e.preventDefault();
      })
    } 
  });
};