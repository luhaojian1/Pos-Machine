const receipt = require("../receipt/Receipt");

it('should  return a array when invoke isValid given barcodes=[\'0001\', \'0003\', \'0005\', \'0003\']', function () {
    //given
   const barcodes = ['0001', '0003', '0005', '0003'];
    //when
    const result = receipt.arrangeGoods(barcodes);
    //then
    expect(result).toEqual([{id:'0001',count:1},{id:'0003',count:2},{id:'0005',count:1}]);

});
//isExist测试-》 false
it('should be return false array when invoke isExist given barcodeChildElement=\'0011\'', function () {
    //given
    const barcodeChildElement='0011';
    //when
    const result = receipt.isExists(barcodeChildElement);
    //then
    expect(result).toBe(false);

});
it('should be return  true when invoke isExist given barcodeChildElement=\'0003\'', function () {
    //given
    const barcodeChildElement='0003';
    //when
    const result = receipt.isExists(barcodeChildElement);
    //then
    expect(result).toBe(true);

});

//isExist测试-》 false
it('should  return null when invoke getDataSource given barcodeChildElement=\'0011\'', function () {
    //given
    const barcodeChildElement='0011';
    //when
    const result = receipt.getDataSource(barcodeChildElement);
    //then
    expect(result).toBe(null);

});
it('should  return a Good Object when invoke getDataSource given barcodeChildElement=\'0011\'', function () {
    //given
    const barcodeChildElement='0001';
    //when
    const result = receipt.getDataSource(barcodeChildElement);
    //then
    expect(result).toEqual({"id": "0001", "name" : "Coca Cola", "price": 3});

});
//createReceipt测试 错误：
it('should  return \'错误\' when invoke createReceipt given barcodes=[{id:\'0001\',count:1},{id:\'0002\',count:2}]', function () {
    //given
    const barcodes =[{id:'0001',count:1},{id:'0012',count:2}];
    //when
    const result = receipt.createReceipt(barcodes);
    console.log(result);
    //then
    expect(result).toBe("错误！barcodes：0012 不存在");

});
//createReceipt测试 正确：
it('should  return \'错误\' when invoke createReceipt given barcodes=[{id:\'0001\',count:1},{id:\'0003\',count:2}，{id:\'0005\',count:1}]', function () {
    //given
    const barcodes =[{id:'0001',count:1},{id:'0003',count:2},{id:'0005',count:1}];
    //when
    const result = receipt.createReceipt(barcodes);
    //then
    expect(result).toBe(
        "Receipts\n" +
        "------------------------------------------------------------\n" +
        "Coca Cola\t3\t1\n" +
        "Pepsi-Cola\t5\t2\n" +
        "Dr Pepper\t7\t1\n" +
        "------------------------------------------------------------\n" +
        "Price：20");

});
//createReceipt测试 正确：
it('should  return a receipt when invoke printReceipt given barcodes=[\'0001\', \'0003\', \'0005\', \'0003\']', function () {
    //given
    const barcodes =['0001', '0003', '0005', '0003'];
    //when
    const result = receipt.printReceipt(barcodes);
    //then
    expect(result).toBe(
        "Receipts\n" +
        "------------------------------------------------------------\n" +
        "Coca Cola\t3\t1\n" +
        "Pepsi-Cola\t5\t2\n" +
        "Dr Pepper\t7\t1\n" +
        "------------------------------------------------------------\n" +
        "Price：20");

});
