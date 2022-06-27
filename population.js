var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    //Get all the countries with a population of less than 2 lakhs using Filter function
   var population=result.filter((element)=>element.population<200000);
   console.log(population);
}