// 不可缺少
ga("create", "UA-192566483-1");
// 加载电子商务插件
ga("require", "ec");
var prodId = '';
if (document.querySelector('#placeOrder') != undefined) {
  prodId = document.querySelector('#placeOrder').getAttribute('prodId');
} else if (document.querySelector('#addToCart') != undefined) {
  prodId = document.querySelector('#addToCart').getAttribute('prodId');
}
if (prodId != '') {
  var prodName = document.querySelector('.this-description-name').textContent.trim();
  var positionList = document.querySelectorAll('div.sitewidget-position span[itemprop="itemListElement"] a[itemprop="item"]');
  var prodGroupName = '';
  if (positionList.length >= 3) {
    prodGroupName = positionList[2].text.trim();
  }
  var price = document.querySelector('#prodDiscountPrice span.needExchangeValue').getAttribute('exchangevalue');
  ga('ec:addProduct', {
    'id': prodId,
    'name': prodName,
    'category': prodGroupName,
    'brand': '',
    'variant': ''
  });
  ga('ec:setAction', 'detail');
  ga('send', 'event', 'prodDetailView', prodId, prodName);
}