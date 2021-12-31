var sendmails=require('nodemailer')

let transportor = sendmails.createTransport({
    service:'gmail',
    auth:{
    user:'jithendarreddy9676@gmail.com',
    password:'Gjr@15155Gjr'
    }
});
var mailoptions={
    form:'jithendarreddy9676@gmail.com',
    to:`jithendarreddy15155@gmail.com`,
    subject:"Hii iam a developer"
}
transportor.sendMail('mailoptions',(err,sent)=>{
    if(err){
        console.log('mail not sent')

    }else{
        console.log('mail sent successfully')
    }
})