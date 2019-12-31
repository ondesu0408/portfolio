/*--------------------- 2019 -----------------------
Eungyu's custom JS
------------------------------------------------------------------*/

/*
More Programming / Close
*/
function moreProgramming() {
    var more = document.querySelector("#programming_plus");
    console.log("clicked")
    more.innerHTML = "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='70'><strong></strong></div><span>Python</span></div></div>" + 
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='80'><strong></strong></div><span>HTML5</span></div></div>" +
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='80'><strong></strong></div><span>CSS</span></div></div>" +
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='70'><strong></strong></div><span>JavaScript</span></div></div>" +
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center progrmming_margin'><div class='progressbar'><div class='second circle' data-percent='40'><strong></strong></div><span>C#</span></div></div>" +
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center progrmming_margin'><div class='progressbar'><div class='second circle' data-percent='40'><strong></strong></div><span>SQL</span></div></div>" 
    console.log("moreProgramming")

    var delete_button = document.querySelector(".programming")
    delete_button.innerHTML =""
    console.log("delete More button")

    var close_button = document.querySelector(".programming")
    close_button.innerHTML = "<button type='button' data-type='contact' class='programming_btn' onclick='closeProgramming();'><span id='buttonChange'>Close</span></button>";
    console.log("Close button")
}

function closeProgramming(){
    var closing = document.querySelector("#programming_plus");
    console.log("clicked")
    closing.innerHTML = "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='70'><strong></strong></div><span>Python</span></div></div>" + 
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='80'><strong></strong></div><span>HTML5</span></div></div>" +
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='80'><strong></strong></div><span>CSS</span></div></div>" +
    "<div class='col-xl-3 col-lg-6 col-sm-6 text-center'><div class='progressbar'><div class='second circle' data-percent='70'><strong></strong></div><span>JavaScript</span></div></div>"

    var delete_button = document.querySelector(".programming")
    delete_button.innerHTML =""
    console.log("delete Close button")

    var close_button = document.querySelector(".programming")
    close_button.innerHTML = "<button type='button' data-type='contact' class='programming_btn' onclick='moreProgramming();'><span id='buttonChange'>More</span></button>";
    console.log("More button")

}