/**
 *  ga 命中封装
 */

(function(window){
  function measureHelp(){};
  measureHelp.prototype.ProductListClick = ProductListClick;
  measureHelp.prototype.seeProdDetailproduct = seeProdDetailproduct;
  measureHelp.prototype.addToCart = addToCart;
  measureHelp.prototype.removeToCart = removeToCart;
  measureHelp.prototype.buyProduct = buyProduct;
  measureHelp.prototype.refundMoney = refundMoney;

  window.measureHelp = measureHelp;

  // 衡量产品列表某个产品点击
function ProductListClick(product){
  initRequire();
  ga('ec:addProduct', {
    'id': product.id,
    'name': product.name,
    'category': product.category,    // 产品所属的类别（例如服装）。
    'brand': product.brand,          // 与产品关联的品牌（例如 Google）。
    'variant': product.variant       // 产品的细分款式（例如黑色）。
  });
  ga('ec:setAction', 'click', {list: 'Search Results'});
  ga('send', 'event', 'UX','click', 'Results');
}

//  查看产品详情
function seeProdDetailproduct(product){
  initRequire();
  ga('ec:addProduct', {
    'id': product.id,
    'name': product.name,
    'category':product.category
  });
  ga('ec:setAction', 'detail');
  ga('send', 'event', 'prodDetailView', prodId, prodName);
 }

// 添加到购物车
function addToCart(product) {
  initRequire();
  ga('ec:addProduct', {
    'id': product.id,
    'name': product.name,
    'category': product.category,
    'brand': product.brand,
    'variant': product.variant,
    'price': product.price,
    'quantity': product.quantity
  });
  ga('ec:setAction', 'add');
  ga('send', 'event', 'UX', 'click', 'add to cart');     // Send data using an event.
}

// 移出购物车
function removeToCart(product) {
  initRequire();
  ga('ec:addProduct', {
    'id': product.id,
    'name': product.name,
    'category': product.category,
    'brand': product.brand,
    'variant': product.variant,
    'price': product.price,
    'quantity': product.qty
  });
  ga('ec:setAction', 'remove');
  ga('send', 'event', 'UX', 'click', 'remove to cart');
}

// 付款
function buyProduct(product,purchase){
  initRequire();
  ga('ec:addProduct', {
    'id': product.id,
    'name': product.name,
    'category': product.category,
    'brand': product.brand,
    'variant': product.variant,
    'price': product.price,
    'coupon': product.coupon,
    'quantity': product.quantity
  });
  ga('ec:setAction', 'purchase', {
    'id': purchase.id,
    'affiliation': purchase.affiliation,
    'revenue': purchase.revenue,
    'tax': purchase.tax,
    'shipping': purchase.shipping,
    'coupon': purchase.coupon
  });
  ga('send', 'event', 'Ecommerce', 'payment', 'buy product');
}

// 退款
function refundMoney(product,refund){
  initRequire();
  ga('ec:addProduct', {
    'id': product.id,
    'quantity': product.quantity
  });
  ga('ec:setAction', 'refund', {
    'id': refund.id,
  });
  ga('send', 'event', 'Ecommerce', 'Refund', {'nonInteraction': 1});
}

function initRequire(){
  ga("require", "ec");
}
})(window)