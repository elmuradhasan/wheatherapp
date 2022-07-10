let result = document.getElementById("result");
let searchbtn = document.getElementById("search");
let cityref = document.getElementById("city");
let getWeateher = ()=>{
    let cityvalue = cityref.value;
     if (cityvalue.length == 0) {
        result.innerHTML = `<h3>Xahis olunur seher daxil edin</h3>`;
        console.log("ok");
     }else{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${key}&units=metric`;
        fetch(url).then((response)=>response.json().then((data)=>{
           result.innerHTML =   `<h2 class="name">Şəhər:${data.name}</h2>
           <h4 class="weather_des">Açıqlama:${data.weather[0].description}</h4>
           <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" class="sun">
           <h2 class="main_temp">${data.main.temp} &#176;</h2>
          <div class="papa_div">
          <div class="temp">
          <h3 class="title">min</h3>
         <h4 classs="tempmin">${data.main.temp_min} &#176;</h4>
       </div>
       <div class="temp">
       <h3 class="title">max</h3>
      <h4 classs="tempmin">${data.main.temp_max} &#176;</h4>
    </div>
          </div>
        <h5 class="speed">Küləyin surəti ${data.wind.speed}</h5>
           `;
           cityref.value="";
           console.log(data);
        })).catch(()=>{
            result.innerHTML =`<h2 class="dontresult">Axtardığınız şəhər tapılmadı</h2>
            <h4 class="dontresult">Doğru yazdığınıza əmin olun</h4>`;
        })
     }

};
window.addEventListener("load",getWeateher);
