(function() {
  const mainImg = document.querySelector('.product-page__slider-main-img'),
        picture = document.querySelectorAll('.slider__list--img'),
        productDetails = document.querySelectorAll('.product__details'),
        productDetailsItem = document.querySelectorAll('.product__details-item'),
        form = document.getElementById('product-form');

  // instantiate ui
  const ui = new UI();
  
  // change large image by clicking on small 
  picture.forEach(img => {
    img.addEventListener('click', (e) => {
      mainImg.src = img.src;
    })
  });

  //product details event listeners(when one details is open close the second one)
  productDetails.forEach(details => {  
    details.addEventListener('click', (e) => {
      if(e.target.parentElement.classList.contains('product__details-summary')) {
        productDetailsItem.forEach(item => {
          item.classList.remove('active')
      })
      e.target.parentElement.nextElementSibling.classList.add('active');
      }
    })
  });

  //close product details in mob layout, open it on tablet layout
  ui.detailsStatus(productDetails);

  window.addEventListener('resize', () => {
    ui.detailsStatus(productDetails);
  });

  //add product with information to sessionStorage 
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('.product__title').innerHTML,
          color = 'Black',
          price = document.querySelector('.price').innerHTML,
          qty = document.querySelector('.qty').value,
          sku = document.querySelector('.sku').innerHTML.split(' ').slice(1).join(' ');

    const product = new Product();
    const productItem = new Product(name, color, price, sku, qty);

    product.addProduct(productItem);
  });  
})();