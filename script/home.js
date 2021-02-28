(function() {
  const leftBtn = document.querySelectorAll('.hero-left-arrow'),
        rightBtn = document.querySelectorAll('.hero-right-arrow'),
        elipse = document.querySelectorAll('.elipse'),
        sliderItems = document.querySelectorAll('.hero-slider-list__item');

  let counter = 0;

  //slide to left on btn click
  leftBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      if(counter <= 0) {
        counter = sliderItems.length -1;
      } else {
        counter--;
      }
      
      sliderItems.forEach((item, index) => { 
        item.classList.add('visualy-hidden') 
        if(index === counter){
          item.classList.remove('visualy-hidden')
        }
      })
      
      elipse.forEach((item, index) => { 
        item.classList.remove('active-elipse') 
        if(index === counter){
          item.classList.add('active-elipse')
        }
      })
    })
  })

  //slide to right on btn click
  rightBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      if(counter >= sliderItems.length -1) {
        counter = 0;
      } else {
        counter++;
      }
      
      sliderItems.forEach((item, index) => {  
        item.classList.add('visualy-hidden') 
        if(index === counter){
          item.classList.remove('visualy-hidden')
        }
      })

      elipse.forEach((item, index) => { 
        item.classList.remove('active-elipse') 
        if(index === counter){
          item.classList.add('active-elipse')
        }
      })
    })
  })
})();