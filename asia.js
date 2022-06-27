var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    //Get all the countries from Asia continent /region using Filter function
    var region=result.filter((element)=>element.region==="Asia");
    console.log(region);
}