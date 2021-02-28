(function() {
  const shopByBtn = document.getElementById('shop-by-btn'),
        shopingOptionsTitle = document.querySelectorAll('.shopping-options-title'),
        gridBtn = document.getElementById('grid-button'),
        listBtn = document.getElementById('list-button'),
        productListContainer = document.getElementById('product-list-container'),
        productItem = document.querySelectorAll('.product__item'),
        productItemDetails = document.querySelectorAll('.product__item-details'),
        productItemAction = document.querySelectorAll('.product__item-action');

  // instantiate ui
  const ui = new UI();

  //open filter options on mobile
  shopByBtn.addEventListener('click', () => {
    ui.active('product-options-wrapper', 'active');
  });

  //filter accordion toggle options on click
  shopingOptionsTitle.forEach(navTitle => {
    navTitle.addEventListener('click', () => {
      if(!navTitle.nextElementSibling.classList.contains('visualy-hidden')) {
        navTitle.nextElementSibling.classList.toggle('visualy-hidden')
      } else {
        shopingOptionsTitle.forEach(element => {  
          element.nextElementSibling.classList.add('visualy-hidden');
        });
        navTitle.nextElementSibling.classList.remove('visualy-hidden');
      }
    });
  });

  //change layout to grid on click
  gridBtn.addEventListener('click', (e) => {
    ui.switchClass(productListContainer, 'product__grid-list', 'product__grid');

    productItem.forEach(item => {
      ui.switchClass(item, 'product__item-list', 'product__item-grid');
    });
    productItemDetails.forEach(details => {
      ui.switchClass(details, 'product__item-details-list', 'product__item-details-grid');
    });
    productItemAction.forEach(action => {
      ui.switchClass(action, 'product__item-action-list', 'product__item-action-grid');
    });
  });

  //change layout to list on click
  listBtn.addEventListener('click', (e) => {
    ui.switchClass(productListContainer, 'product__grid', 'product__grid-list');

    productItem.forEach(item => {
      ui.switchClass(item, 'product__item-grid', 'product__item-list');
    });
    productItemDetails.forEach(details => {
      ui.switchClass(details, 'product__item-details-grid', 'product__item-details-list');
    });
    productItemAction.forEach(action => {
      ui.switchClass(action, 'product__item-action-grid', 'product__item-action-list');
    });
  });
})();