(function() {
  const shopByBtn = document.getElementById('shop-by-btn'),
        shopingOptionsTitle = document.querySelectorAll('.shopping-options-title'),
        gridBtn = document.getElementById('grid-button'),
        listBtn = document.getElementById('list-button'),
        productListContainer = document.getElementById('product-list-container'),
        productItem = document.querySelectorAll('.product__item'),
        productItemDetails = document.querySelectorAll('.product__item-details'),
        productItemAction = document.querySelectorAll('.product__item-action');

  const ui = new UI();

  shopByBtn.addEventListener('click', () => {
    ui.active('product-options-wrapper', 'active');
  });

  shopingOptionsTitle.forEach(navTitle => {
    navTitle.addEventListener('click', () => {
      shopingOptionsTitle.forEach(element => {  
        element.nextElementSibling.classList.add('visualy-hidden');
      });
      navTitle.nextElementSibling.classList.remove('visualy-hidden');
    });
  });

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