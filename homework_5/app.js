const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const ruble = document.querySelector("#ruble")

const convert =(elem, target, isTrue) =>{
    elem.addEventListener("input", () =>{
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.setRequestHeader("Content_type", "application/json");
        request.send();
        request.addEventListener("load", () =>{
          const response = JSON.parse(request.response);
            isTrue
                ? (target.value = (elem.value / response.usd).toFixed(2))
                : (target.value = (elem.value * response.usd). toFixed(2))
                ? (target.value = (elem.value / response.ruble).toFixed(2))
                : (target.value = (elem.value * response.ruble).toFixed(2));
          elem.value === "" ? (target.value = ""): null;

        });
    })
}

convert(som, usd, ruble)
convert(ruble, usd, som)