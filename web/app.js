
let cityName = document.querySelector("#cityName").value;

let getWeather = () => {
    
        axios.get('http://localhost:5001/weather')  
          .then(function (response) {
            console.log(response.data);
            })

  .catch(function (error) {
    
    console.log(error);
  })
    }

