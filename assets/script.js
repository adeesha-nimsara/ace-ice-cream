function myFunction() {
    var starwberry = document.getElementById("starwberry");
    var mango = document.getElementById("mango");

    new simpleParallax(starwberry,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });

    new simpleParallax(mango,{
        delay: .6,
	    transition: 'cubic-bezier(0,0,0,1)'
    });
  }