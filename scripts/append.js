function append(data){
    let box = document.querySelector("#show");
    let loading=document.querySelector("#loading");
    loading.style.display="none";
    box.innerHTML=null
    data.forEach(function(el){
        let card=document.createElement("div");
        card.addEventListener("click",function(){
            mdetails(el);
        })
        let pic=document.createElement("img");
        pic.src=el.Poster;
        let title=document.createElement("h3");
        title.innerText=el.Title;
        card.append(pic,title);
        box.append(card);
    
    })
    function mdetails(el){
        let body=document.querySelector("body");
       let details=document.createElement("div");
       details.addEventListener("click",cl);
       details.setAttribute("class","details");
       let dis=document.createElement("img");
       dis.src=el.Poster;
       let Nam=document.createElement("h3");
       Nam.innerText="Name : "+el.Title;
       let Yol=document.createElement("h3");
       Yol.innerText="Year : "+el.Year;
       
       
       details.append(dis,Nam,Yol);
       body.append(details);
    
       function cl(){
        details.classList.add("hide");
    }
    
    }
    
    
    
    }

    export default append;