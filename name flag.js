var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    //Print the following details name, capital, flag using forEach function
    result.forEach((element) => {
        console.log(element.name+" "+element.capital+" "+element.flag);
    });
}