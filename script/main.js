(function(){
  const closeBtn = document.querySelectorAll('.close-button'),
        cartBtn = document.getElementById('nav-cart-button'),
        searchBtn = document.getElementById('nav-search-btn'),
        menuBtn = document.getElementById('nav-menu-button'),
        menuTitle = document.querySelectorAll('.nav-menu-title'),
        secondMenuTitle = document.querySelectorAll('.nav-menu-title-second'),
        footerDetails = document.querySelectorAll('.footer__details');

  const midMQ = window.matchMedia('(max-width: 1023px)');
  
  // instantiate ui and product
  const ui = new UI();
  const product = new Product();

  //close menu when close btn is clicked
  closeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
  
      if(e.target.parentElement.classList.contains('active')) {
        e.target.parentElement.classList.remove('active')
      }
    });
  })
  
  //open cart and get all product from sessionStorage
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const container = document.getElementById('list-template-layout')
    container.innerHTML = '';

    ui.active('cart-wrapper', 'active');

    product.showProductInCart(container);
  });

  //open search window
  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    ui.active('search-wrapper', 'active');
  });

  //open menu on mobile resolution
  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    ui.active('menu-wrapper', 'active');
  });

  //toggle through menu on mobile resolution
  menuTitle.forEach(navTitle => {
    navTitle.addEventListener('click', () => {
      if(navTitle.nextElementSibling.classList.contains('display-block')) {
        navTitle.nextElementSibling.classList.toggle('display-block')
      } else {
        menuTitle.forEach(element => {
          if(midMQ.matches) {   
            element.nextElementSibling.classList.remove('display-block');
          }
        })
        if(midMQ.matches) {   
          navTitle.nextElementSibling.classList.add('display-block');
        }
      }
    })
  })

  secondMenuTitle.forEach(secNavTitle => {
    secNavTitle.addEventListener('click', (e) => {
      if(secNavTitle.nextElementSibling.classList.contains('display-block')) {
        secNavTitle.nextElementSibling.classList.toggle('display-block')
      } else {
        secondMenuTitle.forEach(element => {
          if(midMQ.matches) {   
            element.nextElementSibling.classList.remove('display-block');
          }
        })
        if(midMQ.matches) {   
          secNavTitle.nextElementSibling.classList.add('display-block');
        }
      }
    }) 
  });  

  //close search, cart, nav menu menu on click outside of the element
  const searchWrapper = document.getElementById('search-wrapper')
  const cartWrapper = document.getElementById('cart-wrapper')
  const menuWrapper = document.getElementById('menu-wrapper')
  
  searchWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
  })
  cartWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
  })
  menuWrapper.addEventListener('click', (e) => {
    e.stopPropagation();
  })

  document.body.addEventListener('click', (e) => {    
    if(cartBtn.nextElementSibling.classList.contains('active')) {
      ui.close('cart-wrapper', 'active');
    };
    if(searchBtn.nextElementSibling.classList.contains('active')) {
      ui.close('search-wrapper', 'active');
    };
    if(menuBtn.nextElementSibling.classList.contains('active')) {
      ui.close('menu-wrapper', 'active');
    };
  });

  //close details in footer in mob layout, open it and disable it on tablet layout
  ui.detailsStatus(footerDetails);

  window.addEventListener('resize', () => {
    ui.detailsStatus(footerDetails);
  });
})();



 