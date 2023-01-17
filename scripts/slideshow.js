function carousel(){
    let carouselEle=document.querySelector("#carousel");
    let image=[
     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8295/1328295-h-b05c8156e59a",
     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/2647/1352647-h-3ee44a4e42bd",
     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8314/1358314-h-05e1bdab5cff",
     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5857/1345857-h-8d590e7aafc6",
     "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8455/1348455-h-ea6c15238dd5"
    ]
 
    let imgElement=document.createElement("img");
    imgElement.src=image[0];
    carouselEle.append(imgElement);
 
 
    let i=1;
    setInterval(function(){
     if(i===image.length){
         i=0;
     }
     imgElement.src=image[i];
     carouselEle.append(imgElement);
     i++;
    },5000)
   
 }

 export default carousel;