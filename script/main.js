(function(){
  const closeBtn = document.querySelectorAll('.close-button'),
        cartBtn = document.getElementById('nav-cart-button'),
        searchBtn = document.getElementById('nav-search-btn'),
        menuBtn = document.getElementById('nav-menu-button'),
        menuListItem = document.querySelectorAll('.menu__list-item'),
        menuTitle = document.querySelectorAll('.nav-menu-title'),
        secondMenuTitle = document.querySelectorAll('.nav-menu-title-second');

  const midMQ = window.matchMedia('(max-width: 1023px)'),
        largeMq = window.matchMedia('(min-width: 1024px)');
  
  const ui = new UI();

  closeBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
  
      if(e.target.parentElement.classList.contains('active')) {
        e.target.parentElement.classList.remove('active')
      }
    });
  })
  
  cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    ui.active('cart-wrapper', 'active');
  });

  searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    ui.active('search-wrapper', 'active');
  });

  menuBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    ui.active('menu-wrapper', 'active');
  });

  menuTitle.forEach(navTitle => {
    navTitle.addEventListener('click', () => {
      menuTitle.forEach(element => {
        if(midMQ.matches) {   
          element.nextElementSibling.classList.remove('display-block');
        }
        if(largeMq.matches) {
          element.nextElementSibling.classList.remove('active');
        }
      })
      if(midMQ.matches) {   
        navTitle.nextElementSibling.classList.add('display-block');
      }
      if(largeMq.matches) {
        navTitle.nextElementSibling.classList.add('active');
      }
    })
  })

  secondMenuTitle.forEach(secNavTitle => {
    secNavTitle.addEventListener('click', (e) => {
      secondMenuTitle.forEach(element => {
        if(midMQ.matches) {   
          element.nextElementSibling.classList.remove('display-block');
        }
      })
      if(midMQ.matches) {   
        secNavTitle.nextElementSibling.classList.add('display-block');
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
    menuListItem.forEach(item => {
      if(item.nextElementSibling.classList.contains('active')) {
        let wraper = document.querySelectorAll('.menu__list-item--second-container') 
        wraper.forEach(item => {
          item.classList.remove('active')
        })
      }
    });
  });

  //close details in footer in mob layout open it on deskop layout
  function footerDetails() {
    const details = document.querySelectorAll('.footer__details');
    
    details.forEach(details => {
      if(midMQ.matches) {   
        details.open = false;
      }
  
      if(largeMq.matches) {
        details.open = true;
        details.addEventListener('click', (e) => {
          e.preventDefault();
        })
      } 
    })
  }; 

  footerDetails();
})();



 