function Product(name, color, price, sku, qty, details) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.sku = sku;
  this.qty = qty;
  this.details = details;
}

//get all products form sesionStorage
Product.prototype.getProduct = function() {
  let products;
  if(sessionStorage.getItem('products') === null) {
    products = []
  } else {
    products = JSON.parse(sessionStorage.getItem('products'))
  }

  return products;
};

//add product to sessionStorage
Product.prototype.addProduct = function(product) {
  const products = this.getProduct();

  products.push(product);

  sessionStorage.setItem('products', JSON.stringify(products))
};

//show product added to sessionStorage 
Product.prototype.showProductInCart = function(element) {
  const products = this.getProduct();

  products.forEach(product => {
    const ui = new UI();

    ui.generateCartDOM(element, product);
  });
}
