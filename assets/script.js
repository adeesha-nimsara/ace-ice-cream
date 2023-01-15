$(document).ready(function(){

    $(".normal").click(function(){
        $('.active').removeClass("active");
        $(this).addClass("active");
    });

});








/*function myFunction() {
    var starwberry = document.getElementById("starwberry");
    var mango_ro = document.getElementById("mango-row");
    var mango_cube_1 = document.getElementById("cube-mango-1");
    var mango_cube_2 = document.getElementById("cube-mango-2");
    var mango_cube_3 = document.getElementById("cube-mango-3");

    new simpleParallax(starwberry,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)',
    });

    new simpleParallax(mango_row,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)',
    });

    new simpleParallax(mango_cube_1,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)',
    })
  }*/