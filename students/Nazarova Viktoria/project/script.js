const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
  ];
  
  const renderGoodsItem = (title, price) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
  };
  
  const renderGoodsList = (list = []) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
  }
  
  renderGoodsList(goods);


  class Basket {
    constructor() {
      this.goods = [];
    }

    fetchGoods() {

    }

    addGoods(){

    }

    deleteGoods(){

    }

    totalSum(){
      
    }

  }


  totalSum{
    let sum = 0;
    this.goods.forEach(item => {
      sum += item.price;
    })
    return sum;
  }