this.onmessage = function (e){
    const {data} =e;
    this.postMessage({"addresult":data.arg1+data.arg2});
}