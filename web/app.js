
let name = document.querySelector("#name").value;
let price = document.querySelector("#price").value;
let cat = document.querySelector("#cat").value;
let desc = document.querySelector("#desc").value;

let addProduct = () => {
    
axios.post('http://localhost:5001/weather')  
  
.then(function (response) {
  console.log(response.data);
  })

  .catch(function (error) {
    
    console.log(error);
  })
  }

