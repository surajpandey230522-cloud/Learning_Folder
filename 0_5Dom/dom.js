// document.querySelector()
// document.querySelectorAll()
// document.getElementById()
// document.addEventListener()




async function getCalculations() {

    let response = await fetch(
        "https://app.customgpt.ai/api/v1/projects "
    );

    let data = await response.json();

    console.log(data);
}

getCalculations();