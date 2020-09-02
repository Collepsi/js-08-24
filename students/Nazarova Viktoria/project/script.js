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

    addQuantity() {
      console.log('Adding quantity');
      this.goods += 1;
  }

    removeQuantity() {
     console.log('Removing quantity');
     this.goods += 1;
}

    totalSum{
     let sum = 0;
     this.goods.forEach(item => {
    sum += item.price;
    })
    return sum;
}

}





let makeGETRequest = (url) => {
    return new Promise((resolve, reject ) => {
        let xhr = new XMLHttpRequest();

        xhr.open('GET', url, true);
        xhr.onreadystatechange = () => {
            const r = xhr.responseText;      
            resolve(r);  
            reject(console.log('error'));    
        }
        xhr.send();
    });
}
makeGETRequest();



