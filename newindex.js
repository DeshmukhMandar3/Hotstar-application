let arr=JSON.parse(localStorage.getItem("movies"))||[];
displayMovies(arr);
function displayMovies(data){
    document.querySelector("#box").innerHTML=null;
    data.forEach(function(el){
      let card=document.createElement("div");
      let pic=document.createElement("img");
      pic.src=el.image;
      let name=document.createElement("p");
      name.innerText="Name :"+el.name;
      let date=document.createElement("p");
      date.innerText="Release Date: "+el.releaseDate;
      let rating=document.createElement("p");
      rating.innerText="IMDB Rating :"+el.rating;

      card.append(pic,name,date,rating);
      document.querySelector("#box").append(card);

    })
}