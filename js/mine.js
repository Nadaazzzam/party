



$(document).ready(function(){
    
    $(".sk-cube-grid").fadeOut(2000,function(){
        
      $("#loading").fadeOut(2000 , function(){
          
              $("body").css("overflow","auto")

      })  

    })
    
    
})

var galleryO = $("#gallery").offset().top;
$(window).scroll(function(){
    
    
var wScrol = $(window).scrollTop();

    if(wScrol > galleryO)
        {
    $(".change").css("backgroundColor","gray")  
    $("#btnUp").fadeIn(500)
        }
    else
        {
    $(".change").css("backgroundColor","transparent")        
    $("#btnUp").fadeOut(500)
            
        }


})



$("#btnUp").click(function(){
    

    
    $("html,body").animate({scrollTop:'0'},1000)
})




$("a").click(function(){
    
   var href =  $(this).attr("href");
  var off =   $(href).offset().top
  
    $("html,body").animate({scrollTop:off},10000)
  
    
})







$("#options-container i").click(function(){
    $(".options").toggle()    
})

var lis = $(".options ul li")

lis.eq(0).css("backgroundColor","tan")
lis.eq(1).css("backgroundColor","teal")
lis.eq(2).css("backgroundColor","orange")
lis.eq(3).css("backgroundColor","#09c")
lis.eq(4).css("backgroundColor","red")


lis.click(function(){
    
  var bgColor = $(this).css("backgroundColor")

  $("*").css("color",bgColor)
  //$("*").css("backgroundColor",bgColor)

})



$(".item").click(function(){
   var hany =  $(this).attr("src") // getter
   $("#mainImg").attr("src",hany)// setter
})


$(".options img").click(function(){
   var imgSrc =  $(this).attr("src")
   $("#home").css("backgroundImage","url("+imgSrc+")")
})





var typed = new Typed('.test1', {
  strings: ["i'm Front-end Developer.", "i'm PHP Developer","web design and development"],
  typeSpeed:10,
  loop:true
});




new WOW().init();


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})




