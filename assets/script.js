function myFunction() {
    var starwberry = document.getElementById("starwberry");
    var mango_row = document.getElementById("mango-row");

    new simpleParallax(starwberry,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });

    new simpleParallax(mango_row,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });
  }