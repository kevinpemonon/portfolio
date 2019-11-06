var positionSkills = $('#skills').offset().top;
var windowHeight = $(window).height();
var html = $('#html');
var js = $('#js');
var mysql = $('#mysql');
var php = $('#php');
var java = $('#java');
var laravel = $('#laravel');
var vue = $('#vue');
var wordpress = $('#wordpress');

$(window).scroll(
    function progressBarSkills() {
        if ($(window).scrollTop() + windowHeight  > positionSkills + 300) {

            html.addClass('html');
            js.addClass('js');
            mysql.addClass('mysql');
            php.addClass('php');
            java.addClass('java');
            laravel.addClass('laravel');
            vue.addClass('vue');
            wordpress.addClass('wordpress');
        } 
    }
);

/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

var menuHide = $('#menu-hide');

$(window).scroll(
    function menuDisplayFixed() {
        if($(window).width() > 860){
            if ($(window).scrollTop() > positionSkills){
                menuHide.removeClass('menu-hide');
                menuHide.addClass('menu-visible');
            } else {
                menuHide.removeClass('menu-visible');
                menuHide.addClass('menu-hide');
            }
        }
    }
)

/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

const exp1 = $('#badge1');
const heigthExp1 = exp1.offset().top;
const exp2 = $('#badge2');
const heigthExp2 = exp2.offset().top;


$(window).scroll(
    function experienceDisplay() {
        if ($(window).scrollTop() > 1200){
            exp1[0].style.marginLeft = "0px";
            exp1[0].style.opacity = "1";
        }

        if ($(window).scrollTop() > 1600){
            exp2[0].style.marginLeft = "0px";
            exp2[0].style.opacity = "1";
        }
    });

/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

const formations = $('#container-formation');
const formationBloc1 = $('#container-formation-1')[0];
const formationBloc2 = $('#container-formation-2')[0];

$(window).scroll(
    function formationDisplay() {
        if ($(window).scrollTop() > 2000){
            formationBloc1.style.marginTop = "0px";
            formationBloc1.style.opacity = "1";
        }

        if ($(window).scrollTop() > 2200){
            formationBloc2.style.marginTop = "0px";
            formationBloc2.style.opacity = "1";
        }
    }
);

/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

const buttonRight = $('.button-right');
const buttonLeft = $('.button-left');
const containersPortfolio = $('#container-portfolio')[0];
const container = $('.container')[0];
let tracker;

buttonRight.click(
    function(){

        if (window.innerWidth >= 840 ){

            tracker=0;
            
            if(containersPortfolio.style.marginLeft == "" || containersPortfolio.style.marginLeft == 3190 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = 1370 + "px";
            }

            if(containersPortfolio.style.marginLeft == 1370 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -450 + "px";
            }
            
            if(containersPortfolio.style.marginLeft == -450 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -2270 + "px";
            }

        } if (window.innerWidth < 840 && window.innerWidth >= 750 ) {
                containersPortfolio.style.marginLeft = -1360 + "px";
        } else {
            tracker=0;
            if(containersPortfolio.style.marginLeft == "" || containersPortfolio.style.marginLeft == 700 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -130 + "px";
            }

            if(containersPortfolio.style.marginLeft == -130 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -950 + "px";
            }
            
            if(containersPortfolio.style.marginLeft == -950 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -1750 + "px";
            }
        }
    }
); 


    /* 
    let i = 0;
    
     for (i=0; i < containersPortfolio.length; i++){
        if ((containersPortfolio[i].style.display == "" || containersPortfolio[i].style.display == "inherit") && tracker == 0){
            if((i+1) < containersPortfolio.length){
                tracker = 1;
                containersPortfolio[i].style.display = "none";
                containersPortfolio[i+1].style.display = "inherit";
            } else {
                tracker = 1;
                containersPortfolio[i].style.display = "none";
                containersPortfolio[0].style.display = "inherit";
            }
        }
    } */

buttonLeft.click(
    function(){

        if (window.innerWidth >= 840 ){
        
            tracker=0;

            if(containersPortfolio.style.marginLeft == -2270 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -450 + "px";
            }

            if(containersPortfolio.style.marginLeft == -450 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = 1370 + "px";
            }

            if(containersPortfolio.style.marginLeft == 1370 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = 3190 + "px";
            }
        } if (window.innerWidth < 840 && window.innerWidth >= 750 ) {
            containersPortfolio.style.marginLeft = 280 + "px";
        } else {
            tracker=0;

            if(containersPortfolio.style.marginLeft == -130 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = 700 + "px";
            }

            if(containersPortfolio.style.marginLeft == -950 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -130 + "px";
            }

            if(containersPortfolio.style.marginLeft == -1750 + "px" && tracker == 0){
                tracker=1;
                containersPortfolio.style.marginLeft = -950 + "px";
            }
        }
});
    
/*     for (j=0; j < containersPortfolio.length; j++){
        if ((containersPortfolio[j].style.display == "" || containersPortfolio[j].style.display == "inherit") && tracker == 0){
            console.log(containersPortfolio[j])
            console.log(containersPortfolio.length)
            if(j > 0){
                tracker = 1;
                containersPortfolio[j].style.display = "none";
                containersPortfolio[j-1].style.display = "inherit";
            } else {
                tracker = 1;
                containersPortfolio[j].style.display = "none";
                containersPortfolio[containersPortfolio.length-1].style.display = "inherit";
            }
        }
    } */
    
/*     if ((container1.style.display == "" || container1.style.display == "inherit") && tracker == 0){
        tracker = 1;
        container1.style.display = "none";
        container4.style.display = "inherit";
    }
    
    if (container2.style.display == "inherit" && tracker == 0){
        tracker = 1;
        container2.style.display = "none";
        container1.style.display = "inherit";
    }
    
     if (container3.style.display == "inherit" && tracker == 0){
        tracker = 1;
        container3.style.display = "none";
        container2.style.display = "inherit";
    }
    if (container4.style.display == "inherit" && tracker == 0){
        tracker = 1;
        container4.style.display = "none";
        container3.style.display = "inherit";
    }
 */

/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

const hamburger = $('.hamburger');
const hamburgerLines = $('.hamburger-line');
const topMenu = menuHide[0];

hamburger.click(function() {
    if (menuHide[0].style.top == "" || menuHide[0].style.top == -400 + "px"){
        menuHide[0].style.top = 0 + "px";
    } else {
        menuHide[0].style.top = -400 + "px";
    }
});

/* try{
    $(window).scroll(
        function changeColorHamburger() {
            if ($(window).scrollTop() > $('#contact').offset().top){
                for (i=0; hamburgerLines.length; i++){
                    hamburgerLines[i].style.backgroundColor = "white";
                }
            } else {
                for (i=0; hamburgerLines.length; i++){
                    hamburgerLines[i].style.backgroundColor = "#444444";
                }
            }
        }
    );
} catch (error) {
    console.log("error");
} */




/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

/* const about = $('#about');
const aboutMenu = $('.about-menu');
const skills = $('#skills');
const skillsMenu = $('.skills-menu');
const experiences = $('#experiences');
const experiencesMenu = $('.experiences-menu');
const formation = $('#formation');
const formationMenu = $('.formation-menu');
const portfolio = $('#portfolio');
const portfolioMenu = $('.portfolio-menu');
const contact = $('#contact');
const contactMenu = $('.contact-menu');

$(window).scroll(
    function menuFocus() {

        if ($(window).scrollTop() > skills.offset().top && $(window).scrollTop() < experiences.offset().top) {
            skillsMenu[0].style.backgroundColor = "white";
            skillsMenu[0].style.color = "#444444";
        } else {
            skillsMenu[0].style.backgroundColor = "";
            skillsMenu[0].style.color = "white";
        }

        if ($(window).scrollTop() > experiences.offset().top && $(window).scrollTop() < formation.offset().top) {
            experiencesMenu[0].style.backgroundColor = "white";
            experiencesMenu[0].style.color = "#444444";
        } else {
            experiencesMenu[0].style.backgroundColor = "";
            experiencesMenu[0].style.color = "white";
        }

        if ($(window).scrollTop() > formation.offset().top && $(window).scrollTop() < portfolio.offset().top) {
            formationMenu[0].style.backgroundColor = "white";
            formationMenu[0].style.color = "#444444";
        } else {
            formationMenu[0].style.backgroundColor = "";
            formationMenu[0].style.color = "white";
        }
        if ($(window).scrollTop() > portfolio.offset().top && $(window).scrollTop() < contact.offset().top - 150) {
            portfolioMenu[0].style.backgroundColor = "white";
            portfolioMenu[0].style.color = "#444444";
        } else {
            portfolioMenu[0].style.backgroundColor = "";
            portfolioMenu[0].style.color = "white";
        }
        if ($(window).scrollTop() > contact.offset().top - 150) {
            contactMenu[0].style.backgroundColor = "white";
            contactMenu[0].style.color = "#444444";
        } else {
            contactMenu[0].style.backgroundColor = "";
            contactMenu[0].style.color = "white";
        }
    }
); */

/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/
/*-------------------------------------------------------------------------------------------------------------------*/

