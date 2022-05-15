$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Thinker" , "Traveller"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


//promises, Await, Async
let quote = document.getElementById("quote");
let author = document.getElementById("quoteh");
const url =' http://quotes.stormconsultancy.co.uk/random.json';

let getQuote = async () => {
  await fetch(url)
  .then((data) => data.json())
  .then((item) => {
    console.log(item.quote);
    quote.innerHTML = item.quote;
    author.innerHTML = item.author;
  });
} 

window.addEventListener("load" , getQuote);


//currying
document.getElementById("curr").innerHTML = getuserCurry("Varnika")("Sharma");

function getuserCurry(firstname) {

        return function(lastname) {

         
            return "Hi , I am  " + firstname + " " + lastname ;

        }

      }


      //closure
      function show() {
        var name = 'This is closure';
        function displayName() {
          alert(name);
        }
        return displayName;
      }
      
      var myFunc = show();
      

      //bind , call, apply
      var obj1={
        num : "My"
     }
     var add = function(num2){
        return (title.innerHTML=(this.num +" "+ num2));
     }
  
    add.call(obj1,"Skills");  

    var obj2={
      num0 : "I'm Varnika Sharma"
   }
   var add2 = function(num2,num3,num4){
      return (text.innerHTML=(this.num0 +" "+ num2 +" "+ num3 +", "+ num4));
   }
   var arr2=["and","I'm a","developer"];
  add2.apply(obj2,arr2); 
 


  var obj3={
    num:"About"
  }
  var add3=function(num,num1){
    return (title2.innerHTML=(this.num+" "+num1));
  }
  var bound=add3.bind(obj3);
  bound(obj3,'me');


///callback

  function greeting(newname) {
    return calledback.innerHTML=newname;
      }
      function processUserInput(callback) {
          newname='I have knowledge of these skills';
          callback(newname);
      }
      processUserInput(greeting);