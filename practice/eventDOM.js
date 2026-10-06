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


let photo = document.getElementById("photo");

photo.setAttribute("src", "new.jpg");

console.log(photo.getAttribute("src"));//.....................

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



//for input validation.....................

let form = document.getElementById("form");
let nameInput = document.getElementById("name");
let message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = nameInput.value;

    if (name === "") {
        message.innerText = "Please enter your name";
        return;
    }

    message.innerText = "Form submitted successfully";

});



//creating and remove element ........................................



let box = document.getElementById("box");

let heading = document.createElement("h1");

heading.innerText = "Hello Suraj";

box.appendChild(heading);



//.....................for paragraph...............................

let paragraph = document.createElement("p");

paragraph.innerText = "This is a paragraph";

document.body.appendChild(paragraph);


//.........................for button,.......................

let button = document.createElement("button");

button.innerText = "Click Me";

document.body.appendChild(button);


//.....................................................................................


//<button id="add">Add</button>
//<button id="remove">Remove</button>

//<div id="box"></div>


let add = document.getElementById("add");
let remove = document.getElementById("remove");
let box = document.getElementById("box");

let paragraph;

add.addEventListener("click", function() {

    paragraph = document.createElement("p");

    paragraph.innerText = "Hello Suraj";

    box.appendChild(paragraph);

});

remove.addEventListener("click", function() {

    if (paragraph) {
        paragraph.remove();
    }

});


//usnig js change the css style.........................
//here heading is a random selector


heading.style.color = "white";
heading.style.backgroundColor = "black";
heading.style.fontSize = "40px";
heading.style.padding = "20px";
heading.style.textAlign = "center";



//local storage,...........................................................

//<input id="name" type="text">
//<button id="save">Save</button>
//<button id="show">Show</button>



let input = document.getElementById("name");
let save = document.getElementById("save");
let show = document.getElementById("show");

save.addEventListener("click", function() {
    localStorage.setItem("name", input.value);
});

show.addEventListener("click", function() {
    let name = localStorage.getItem("name");

    console.log(name);
});