const receipt = require("../js/Receipt");

it('should  return a array when invoke isValid given barcodes=[\'0001\', \'0003\', \'0005\', \'0003\']', function () {
    //given
   const barcodes = ['0001', '0003', '0005', '0003'];
    //when
    const result = receipt.arrangeGoods(barcodes);
    //then
    expect(result).toBe([{id:'0001',count:1},{id:'0003',count:2},{id:'0005',count:1}]);

});
//isExist测试-》 null
it('should be return false array when invoke isExist given barcodeChildElement=\'0002\'', function () {
    //given
    const barcodeChildElement='0002';
    //when
    const result = receipt.isExists(barcodeChildElement);
    //then
    expect(result).toBe(true);

});
it('should be return  array when invoke isExist given barcodeChildElement=\'0003\'', function () {
    //given
    const barcodeChildElement='0003';
    //when
    const result = receipt.isExists(barcodeChildElement);
    //then
    expect(result).toBe(true);

});

//createReceipt测试 错误：
it('should  return \'错误\' when invoke isExist given barcodes=[{id:\'0001\',count:1},{id:\'0002\',count:2}]', function () {
    //given
    const barcodes =[{id:'0001',count:1},{id:'0002',count:2}];
    //when
    const result = receipt.createReceipt(barcodes);
    //then
    expect(result).toBe("错误！barcodes：0002 不存在");

});
//createReceipt测试 正确：
it('should  return \'错误\' when invoke isExist given barcodes=[{id:\'0001\',count:1},{id:\'0003\',count:2}，{id:\'0005\',count:1}]', function () {
    //given
    const barcodes =[{id:'0001',count:1},{id:'0002',count:2},{id:'0005',count:1}];
    //when
    const result = receipt.createReceipt(barcodes);
    //then
    expect(result).toBe(
        "Receipts\n" +
        "------------------------------------------------------------\n" +
        "Coca Cola  3   1\n" +
        "Pepsi-Cola 5   2\n" +
        "Dr Pepper  7   1\n" +
        "------------------------------------------------------------\n" +
        "Price: 20");

});