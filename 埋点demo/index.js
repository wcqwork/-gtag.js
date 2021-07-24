/**
 *  ga 检测代码
 */
window.onload = function () {
  var sendHit = new measureHelp();//命中对象
  InitCurrentPage();

  function InitCurrentPage() {
    var currentPage_prodList = document.querySelector(".sitewidget-prodlist"); //产品列表
    var currentPage_prodDetail = document.querySelector(".proddetail-wrap"); //产品详情

    if (currentPage_prodList) {
      prodListFun(currentPage_prodList);
    } else if (currentPage_prodDetail) {
      prodDetailFun(currentPage_prodDetail);
    }
    // paymentFun(); //buy now
  }

  // 产品列表界面
  function prodListFun(pageDom) {
    pageDom.querySelector(".prodlist-parameter-wrap a").addEventListener("click", prodListClick);
    pageDom.querySelector(".prodlist-cell a").addEventListener("click", prodListClick);
    function prodListClick() {
      var product = {
        id:'',
        name:'',
        category:'',
        brand:'',
        variant:'',
      };
      sendHit.ProductListClick(product);
    }
  }

  // 产品详情界面
  function prodDetailFun(pageDom) {
    var productInfoDom = document.querySelector("#productInfo");
    var product = {
      id:productInfoDom.querySelector("input[name='id']").value,
      name:productInfoDom.querySelector("input[name='name']").value,
      category:productInfoDom.querySelector("input[name='category']").value
    };
    sendHit.seeProdDetailproduct(product);
    // prodCartFun(pageDom,productInfoDom);// 加入购物车
    // paypalFun();  // paypal支付
  }

  // 加入购物车
  function prodCartFun(pageDom,productInfoDom){
    pageDom.querySelector("a.pro-detail-cart").addEventListener('click',function(){
      var id =  productInfoDom.querySelector("input[name='id']").value;
      var name =  productInfoDom.querySelector("input[name='name']").value;
      var product = {
         id:id,
         name: name,
         category: '',
         brand: '',
         variant: '',
         price: '',
         quantity: ''
      }
      sendHit.addToCart(product);
    });
  }

  // 移出购物车
  function removeToCart(){
    var product = {

    };
    sendHit.removeToCart(product);
  }

  // buy now
  function paymentFun(){
    document.querySelector("#submitOrder a.place-order").addEventListener("click",function(){
      var product={

      };
      var purchase = {

      };
      sendHit.buyProduct(product,purchase);
    });
  }
  // paypal
  function paypalFun(){
    pageDom.querySelector("#paypalBtn").addEventListener("click",function(){
      var product={

      };
      var purchase = {

      };
      sendHit.buyProduct(product,purchase);
    });
  }

}


