(function() {
  const mainImg = document.querySelector('.product-page__slider-main-img'),
        picture = document.querySelectorAll('.slider__list--img'),
        productDetails = document.querySelectorAll('.product__details'),
        productDetailsItem = document.querySelectorAll('.product__details-item');

  const ui = new UI();
  
  // change large image by clicking on small 
  picture.forEach(img => {
    img.addEventListener('click', (e) => {
      mainImg.src = img.src;
    })
  });

  //product details event listeners(when one details is open close the secondone)
  productDetails.forEach(details => {  
    details.addEventListener('click', (e) => {
      productDetailsItem.forEach(item => {
        item.classList.remove('active')
      })
      e.target.parentElement.nextElementSibling.classList.add('active');
    })
  });

  //close product details in mob layout, open it on tablet layout
  ui.detailsStatus(productDetails);

  window.addEventListener('resize', () => {
    ui.detailsStatus(productDetails);
  });

  const form = document.getElementById('product-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('.product__title').innerHTML,
          color = document.querySelectorAll('.input-color'),
          price = document.querySelector('.price').innerHTML,
          qty = document.querySelector('.qty').value,
          sku = document.querySelector('.sku').innerHTML.split(' ').slice(1).join(' ');

    // console.log(name)
    // console.log(price)
    // console.log(qty)
    // console.log(sku)

    const product = new Product();
    const productItem = new Product(name, price, qty, sku);

    product.addProduct(productItem);

    
    // color.forEach((color, index) => {
    //   console.log(index)

    //   color.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     color.select(index);
    //   })
    // })
    
  })  

})();