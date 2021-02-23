document.getElementById('nav-search-btn').addEventListener('click', (e) => {
  e.preventDefault()
  const searchContainer = document.getElementById('search-wraper');

  searchContainer.classList.toggle('visualy-hidden');
})

const details = document.getElementById('footer__details');

details.open = true;