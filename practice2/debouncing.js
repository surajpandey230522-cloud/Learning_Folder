//Debouncing/throttling.....................

function debounce(callback,delay){
let Timer;
return function(...args){
    clearTimeout(Timer);

    Timer=setTimeout(()=>{
        callback(...args)
    },delay)

}
}


    function search(value){
        console.log("Searching :",value)
    }

    let debouncedSearch= debounce (search,500)

    debouncedSearch("j")
    debouncedSearch("java")

    debouncedSearch("java src")
    debouncedSearch("java scripts")

    //throttling......................................................

    function throttle(callback, delay) {
    let waiting = false

    return function (...args) {
        if (waiting) return;

        callback(...args);
        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

function handleScroll() {
    console.log("Scroll event handled");
}

const throttledScroll = throttle(handleScroll, 1000);

console.log("scroll", throttledScroll);