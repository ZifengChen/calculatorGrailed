const salePrice = document.getElementById("salePrice"),
      shippingPrice  = document.getElementById("shippingPrice");

//Listen for submit
document.getElementById('calculateBtn').addEventListener('click', function (e) {
    if(salePrice.value=='' || shippingPrice.value==''){
        alert("please enter sale price and shipping fee");     
    }
    else{
        let salePriceNum = parseInt(salePrice.value);
        let shippingFeeNum = parseFloat(shippingPrice.value);
        //console.log(shippingFeeNum);
        //console.log(parseInt(salePrice.value));
        let fee = (salePriceNum*0.06 + (salePriceNum*0.029 +0.3)).toFixed(2);
        let result = salePriceNum - fee - shippingFeeNum;
        document.getElementById("result").textContent='Final Total: $'+result;
        //console.log(fee,result);
    }
});
