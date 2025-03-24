var APIkey= '78600f121fd8de60d2617c51994679bc'
        var APIurl= 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

        var inbox = document.getElementById('inputvalue');
        var btn = document.querySelector('.btn');
        var image = document.getElementById('mainimg');
        
        async function checkWeather(city) {
            const response = await fetch(APIurl + city + `&appid=${APIkey}`)

            if(response.status == 404){
                document.querySelector('.error').style.display = 'block';
                document.querySelector('.wholebox').style.display = 'none';
            }
            else{
                var data = await response.json();
                console.log(data);
                document.querySelector('.temp').innerHTML= Math.round(data.main.temp)+'°C';
                document.querySelector('.city').innerHTML= data.name;
                document.querySelector('.humidity').innerHTML=data.main.humidity + '%';
                document.querySelector('.windspeed').innerHTML=data.wind.speed + 'km/h';

                if(data.weather[0].main == 'Clouds'){
                    image.src = 'image/clouds.png';
                }
                else if(data.weather[0].main == 'Clear'){
                    image.src = 'image/clear.png';
                }
                else if(data.weather[0].main == 'Rain'){
                    image.src = 'image/rain.png';
                }
                else if(data.weather[0].main == 'Drizzle'){
                    image.src = 'image/drizzle.png';
                }
                else if(data.weather[0].main == 'Mist'){
                    image.src = 'image/mist.png';
                }
                document.querySelector('.wholebox').style.display = 'block';
                document.querySelector('.error').style.display = 'none';

            }
        }

        btn.addEventListener('click',()=>{
            checkWeather(inbox.value);
        })