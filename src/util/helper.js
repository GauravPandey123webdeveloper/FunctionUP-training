function printDate(){
    const d= new Date();
    console.log("today date is : ",d.getDate())
}
function printMonth(){
    const d= new Date();
    console.log("Month is : ",d.getMonth())
}
function getBatchInfo(){
    const d= new Date();
    const batch='technitium', week=Math.ceil(d.getDate()/7), Day = d.getDay();
    console.log(batch,' ','W',week,'D',Day,"the topic for today is Nodejs module system" )
}
module.exports={printDate,printMonth,getBatchInfo};