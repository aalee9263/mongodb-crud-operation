
let name = document.querySelector("#name").value
let price = document.querySelector("#price").value
let cat = document.querySelector("#cat").value
let desc = document.querySelector("#desc").value

let addProduct = () => {
    
axios.post('http://localhost:5001/product', {
  name: name,
  price: price,
  category: cat,
  description: desc
})  
  
.then(function (response) {
  console.log("response is success");
  console.log(response.data);
  
  document.querySelector("#result").innerHTML =
  response.data.message
})




  .catch(function (error) {
    
  console.log(error);
  document.querySelector("#result").innerHTML =
  error.data.message
  })
  }

