document.getElementById('getApi').addEventListener('click', gotoApi);

const apikey= '6fd1886d7c734b7da7d124122232701';

function gotoApi() {
    var CityName = document.getElementById('cityInput').value;
console.log(CityName)
const Apiurl = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${CityName}&aqi=no`;

console.log(Apiurl);
fetch(Apiurl)
    .then((res) => res.json())
    .then((data) => {
        let output = `
            <div>
                <div style="color:black; width:10rem; background-color:white; border-radius: 10px;" class="p-3">        
                    <p class="m-0" style="font-width:bold; font-size:2rem;">${data.location.name}</p>
                    <p class="m-0" style="font-width:bold; font-size:4rem;"> ${data.current.temp_c}<sup>°C</sup></p>
                </div>
            </div>
            `;
        console.log('printing data', data);
        document.getElementById('output').innerHTML = output;
    })
    
     .catch((err) => console.log(err))
 }