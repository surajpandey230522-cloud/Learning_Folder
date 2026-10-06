//Mouse event.............................................


click
dblclick
mouseover
mouseout
mousemove
mousedown
mouseup

//ex:-

box.addEventListener("mouseover", function() {
    console.log("Mouse is over the box");
});


//form event ................................

submit
input
change
focus
blur


//
click
dblclick
mouseover
mouseout
keydown
keyup
input
change
submit
focus
blur



//.......................................................................preventdefult...................

let link = document.getElementById("link");

link.addEventListener("click", function(event) {
    event.preventDefault();

    console.log("Link was clicked");
});//preventDefault() stops the browser's default action.



//............................................................removeEventListner,..............................


btn.addEventListener("click", function() {
    console.log("Hello");
});

btn.removeEventListener("click", function() {
    console.log("Hello");
});

//most importane pattern.................................


form.addEventListener("submit", function(event) {

    event.preventDefault();

    let value = input.value;

    // validation
    // processing
    // display result

});