var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all' ,true);
request.send();
request.onload=function(){
    var data= JSON.parse(this.response);
   var result = data.filter((element)=>element.region=== 'Asia')
       console.log(result)

var rdata = data.filter((ele)=>ele.population<200000)
       console.log(rdata)




var sum = data.reduce((ele)=> ele.population)
console.log(sum)
}