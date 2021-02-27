function Product(name, color, price, sku, qty, details) {
  this.name = name;
  this.color = color;
  this.price = price;
  this.sku = sku;
  this.qty = qty;
  this.details = details;
}

Product.prototype.getProduct = function() {
  let products;
  if(sessionStorage.getItem('products') === null) {
    products = []
  } else {
    products = JSON.parse(sessionStorage.getItem('products'))
  }

  return products;
};

Product.prototype.addProduct = function(product) {
  const products = this.getProduct();

  products.push(product);

  sessionStorage.setItem('products', JSON.stringify(products))
};

Product.prototype.displayProducts = function() {};