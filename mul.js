this.onmessage = function(e){
    if(e.data!=undefined){
        this.postMessage(e.data.arg1*e.data.arg2);
    }
}