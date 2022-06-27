var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    //Print the total population of countries using reduce function 
    var totalpopulation=result.reduce((acc,element)=>acc+element.population,0);
    console.log(totalpopulation);
}