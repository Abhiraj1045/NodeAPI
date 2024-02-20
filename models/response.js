class Response{

    isSuccess=false;
    message='';
    singleResult = {}
    constructor(singleResult,message,isSuccess){
        this.isSuccess =isSuccess;
        this.singleResult = singleResult;
        this.message= message;
    }
}


module.exports.Response =Response;