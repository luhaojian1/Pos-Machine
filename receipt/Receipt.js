var goods =[
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

//打印账单
function printReceipt(barcodes) {
   let result = arrangeGoods(barcodes);
   let report = createReceipt(result);
   return report;
}

//判断商品Id是否存在
function isExists(barcodeChildElement) {
    let result = getDataSource(barcodeChildElement);
    if (result == null)
        return false;
    else return true;
}
//创建账单
function createReceipt(barcodes) {
    console.log(barcodes);
    let sumMoney = 0;
   let result = "Receipts\n";
   result +="------------------------------------------------------------\n";
   for (let i=0; i<barcodes.length; i++){
       if (!isExists(barcodes[i].id))
           return "错误！barcodes："+barcodes[i].id+" 不存在";
       let good = getDataSource(barcodes[i].id);
       sumMoney += good.price*barcodes[i].count;
       result += good.name+"\t"+good.price+"\t"+barcodes[i].count+"\n";
   }
   result += "------------------------------------------------------------\n";
    result += "Price："+sumMoney;
   return result;
}


//获取货物信息
function getDataSource(barcodeChildElement) {
    for (let i=0;i<goods.length;i++){
        if (barcodeChildElement == goods[i].id)
            return goods[i];
    }
    return null;
}

//整理商品
function arrangeGoods(barcodes) {
    let i=0;
    let goodObject = {};
    let arr = [];
    for (i = 0; i<barcodes.length;i++){
        if (goodObject[barcodes[i]]==undefined)
        {
            goodObject[barcodes[i]] = 1;
            arr.push(barcodes[i]);
        }
        else goodObject[barcodes[i]]++;
    }
    let result = [];
    for (i = 0; i < arr.length; i++){
        result.push({
            id:arr[i],
            count:goodObject[arr[i]]
        }) ;
    }
    console.log(result);
    return result;
}

module.exports = {printReceipt,createReceipt,arrangeGoods,isExists,getDataSource};