const som = document.querySelector('#som');
const usd = document.querySelector('#usd');
const ruble = document.querySelector("#ruble")

// const convert =(elem, target, target2, isTrue) =>{
//     elem.addEventListener("input", () =>{
//         const request = new XMLHttpRequest();
//         request.open("GET", "data.json");
//         request.setRequestHeader("Content_type", "application/json");
//         request.send();
//         request.addEventListener("load", () =>{
//           const response = JSON.parse(request.response);
//             isTrue
//                 ? (target.value = (elem.value / response.usd).toFixed(2))
//                 : (target.value = (elem.value * response.usd). toFixed(2))
//                 // ? (target.value = (elem.value / response.ruble).toFixed(2))
//                 // : (target.value = (elem.value * response.ruble).toFixed(2));
//           elem.value === "" ? (target.value = ""): null;
//
//         });
//         const response = JSON.parse(request.response);
//         isTrue
//             ? (target.value = (elem.value / response.ruble).toFixed(2))
//             : (target.value = (elem.value * response.reble). toFixed(2))
//         // ? (target.value = (elem.value / response.ruble).toFixed(2))
//         // : (target.value = (elem.value * response.ruble).toFixed(2));
//         elem.value === "" ? (target.value = ""): null;
//
//     });
// }


const convert = (elem, target, target2,target3)=>{
    elem.addEventListener("input", ()=>{
        const reqest = new XMLHttpRequest();
        reqest.open("GET", "data.json");
        reqest.setRequestHeader("Content-type", "application/json");
        reqest.send();
        reqest.addEventListener("load", () => {
            const response = JSON.parse(reqest.response);
            if (elem  === som) {
                target.value =(elem.value / response.usd).toFixed(2);
                target2.value =(elem.value / response.ruble).toFixed(2);
            } else if (elem === usd) {
                target.value = (elem.value * response.usd).toFixed(2);
                target2.value= (elem.value * response.usd / response.ruble).toFixed(2);
            } else if (elem === ruble) {
                target.value = (elem.value * response.ruble / response.usd).toFixed(2);
                target2.value = (elem.value * response.ruble / response.som).toFixed(2);
            }
            elem.value === "" ? (target.value = "") : null
            elem.value === "" ? (target2.value = "") : null
        })
    })
}

convert(som, usd, ruble);
convert(usd, som, ruble);
convert(ruble, som, usd);