$(document).ready(function(){

    $("#logotipo").on("mouseover" , function(){
     $("#banner h1").addClass ("efeito");
    }).on ("mouseout" , function(){
        $("#banner h1").removeClass ("efeito");
    });

    $("#input-search").on("focus", function (){
        $("li.search").addClass ("ativo");
    }).on("blur",function(){
        $("li.search").removeClass ("ativo");
    });
    $(".thumbnails").owlCarousel({
        autoPlay:3000,
        items:4
    });

         var owl  = $(".thumbnails").data ('owlCarousel');
       $('#btn-news-prev').on("click", function(){
           owl.prev();
       });
       $('#btn-news-next').on("click", function(){
           owl.nextAll();
       });

       $("#page-up").on("click",function(event){
           $("body").animate({
               scrollTop:0
           }, 1000);
           event.preventDefault();
       });
       
       $("#btn-bars").on("click", function(){
           $("header").toggleClass("open-menu");
       });
       $("#menu-mobile-mask, .btn-close").on("click", function (){
           $("header").removeClass("open-menu");
       });
       $("#btn-search").on("click", function(){
           $("header").toggleClass("open-search");
       });  

   
});

$(function(){ 
              
    $(".thumbnails .item").on("click", function(){
      
         $("video").attr({ 
         "src":"mp4/"+$(this).data('video')+".mp4",
         "poster": "img/"+$(this).data('video')+".jpg" 
         });
     });

     $("#volume").on("mousemove", function(){
         $("video") [0].volume = parseFloat ($(this).val());
     });

     $("#btn-play-pause").on("click", function(){
      
     
         var video = $("video")[0];

         if ($(this).hasClass ("btn-success")){
           $(this).text ("Stop");
           video.play();
          }else{
             $(this).text ("Play");
             video.pause();
          }

          $(this).toggleClass ("btn-success btn-danger ");
     });

 });