this.onmessage = function(e){
      const {data} =e;
    this.postMessage({"subresult":data.num1-data.num2});
}
