function UI() {}

//add class to element
UI.prototype.active = function(element, className){
  let newElement = document.getElementById(element);

  newElement.classList.add(className);
}

//remove class from element
UI.prototype.close = function(element, className){
  let newElement = document.getElementById(element);
  
  newElement.classList.remove(className);
}

//switch classes on element
UI.prototype.switchClass = function(element, removeClass, addClass){
  element.classList.remove(removeClass);
  element.classList.add(addClass);
}

//close details on mobile style and open it on tablet
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
        if(e.target.parentElement === detail.firstElementChild) {
          e.preventDefault();
        }
      })
    } 
  });
};

//generate DOM for cart
UI.prototype.generateCartDOM = function(element, product) {
  const li = document.createElement('li');

  li.className = 'cart-list__item';

  li.innerHTML = `
  <div class="cart-list__item--img">
    <img src="/assets/img/home-page/cart/black.jpg" alt="Item name 1" />
  </div>

  <div class="cart-list__item--wraper">
    <h2 class="cart-list__item--title">
      <a href="/productPage.html" class="cart-list__item--title__link">${product.name}</a>
    </h2>

    <dl class="cart-list__second">
      <dt tabindex="0" class="cart-list__second-item">Color:</dt>
      <dd tabindex="0" class="cart-list__second-item-description">Black</dd>
      <dt tabindex="0" class="cart-list__second-item">Price:</dt>
      <dd tabindex="0" class="cart-list__second-item-description">${product.price}</dd>
      <dt tabindex="0" class="cart-list__second-item">Qty:</dt>
      <dd>
        <form>
          <fieldset>
            <legend class="visualy-hidden">Item qty control</legend>
            <label for="qty"></label>
            <input name="qty" type="number" class="number" value="${product.qty}"/>
          </fieldset>
        </form>
      </dd>
    </dl>
  </div>
  <div class="cart-action">
    <span tabindex="0" class="icon-edit cart-action-icon"></span>
    <span tabindex="0" class="icon-trash cart-action-icon"></span>
  </div>
  `;

  element.appendChild(li);
}