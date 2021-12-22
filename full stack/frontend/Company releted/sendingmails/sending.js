var sendmails= require('nodemailer')

let transport= sendmails.createTransport({
    service:'gmail',
    auth:{
    user:'oichrxukglsbjpwbgy@kvhrw.com',
    //password:'Gjr@15155'
    }
});
var mailoptions={
    form:'oichrxukglsbjpwbgy@kvhrw.com',
    to:'jithendarreddy9676@gmail.com',
    subject:"Hii iam a developer"
}
transport.sendMail('mailoptions',(err,sent)=>{
    if(err){
        console.log('mail not sent')

    }else{
        console.log('mail sent successfully')
    }
})