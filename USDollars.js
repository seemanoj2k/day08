var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    //Print the country which uses US Dollars as currency. 
    var pop=result.filter((element)=>{
    for(var i in element.currencies){
        if(element.currencies[i].code==="USD"){
        return true;
    }
    }
    }
    ); 
    console.log(pop);
}