import navbar from './component/navbar.js';
let na=document.querySelector("#navbar");
na.innerHTML=navbar();
import carousel from './scripts/slideshow.js';



carousel()



let movies=[
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6407/1366407-v-79ac9f6e4661",
    Title:"WEREWOLF BY NIGHT",
    Year:"25/09/2022",
    rating:8.3},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9310/1269310-v-9bea143faf9b",
    Title:"Ms.MARVEL",
    Year:"11/09/2022",
    rating:7.9},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9942/1279942-v-724d56a723a1",
    Title:"DOCTOR STRANGE",
    Year:"17/09/2022",
    rating:9.1},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8299/1328299-v-41830f478c3f",
    Title:"THOR: LOVE & THUNDER",
    Year:"05/09/2022",
    rating:9.5},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4293/754293-v",
    Title:"AVATAR",
    Year:"31/08/2022",
    rating:7.5},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5242/875242-v",
    Title:"LION KING",
    Year:"19/09/2022",
    rating:8.1},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4767/674767-v",
    Title:"CARS-3",
    Year:"01/09/2022",
    rating:7.1},
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4836/1374836-v-9e675d9bcb9e",
    Title:"PREY",
    Year:"08/09/2022",
     rating:7.6
    },
    {Poster:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4831/674831-v",
    Title:"THE JUNGEL BOOK",
    Year:"27/09/2022",
     rating:9.3
    }
];

localStorage.setItem("movies",JSON.stringify(movies));
import append from './scripts/append.js'
 

let hl=document.querySelector("#sort-hl");
hl.addEventListener("click",sorthl); 


 function sorthl(){
    movies=movies.sort(function(a,b){
        if(a.rating>b.rating){return -1;}
        else if(a.rating<b.rating){return 1;}
        else{return 0;}
    })
    append(movies);
   
}

let lh =document.querySelector("#sort-lh");
lh.addEventListener("click",sortlh); 

function sortlh(){
    movies=movies.sort(function(a,b){
        if(a.rating>b.rating){return 1;}
        else if(a.rating<b.rating){return -1;}
        else{return 0;}
    })
    append(movies);
}






let getmyData=new Promise(function(resolve,reject){

    setTimeout(function(){
        let data=movies;

        if(data!=null){
            resolve(data);
        }
        else{
            reject("server cannot fetch your data");
        }
    },3000)
})

getmyData.then(function(success){
    append(success);
})
.catch(function(rejected){
    
})
function Open(){
    window.open("./Login.html","_self");
}
