 /**
 *?  SHOPPING CART
 **/
let label = document.getElementById('label')
 let shoppingCart = document.getElementById('shopping_cart')
 let basket = JSON.parse(localStorage.getItem('data')) || []

 let calculate = () => {
    let cartIcon = document.querySelector('.counts')
    cartIcon.innerHTML = basket.length
 }

let generate_cart_item = () =>{
if(basket.length !==0){
   return(shoppingCart.innerHTML = basket.map((x) =>{
      let {id,name,img,price,item,desc} = x

      return`
      <div class='cart_item'>
      <p>${name}</p>
      <div class='cart_item_img'>
      <img width='100px' src='${img}' alt'' />
      </div>
      <p>${price}</p>

      <button class='remove_item' onclick="remove_from_cart(${id})">remove</button>
      </div>
      `
   })
       
   )
}
}

generate_cart_item()

 calculate()


  /**
 *! REMOVE FROM CART
 **/


 let remove_from_cart = (id) => {
  basket = basket.filter((x) => x.id != id)
  localStorage.setItem('data', JSON.stringify(basket))
  calculate()
  generate_cart_item()

 }

 
  /**
 *? TOTAL FUNCTION
 **/

 let Total_amount = () => {
   let total_amount = 0
   basket.map((item) => {
      total_amount += item.item * item.price
   })

   label.innerHTML =`
     <div class='checkout_area'>
     <h2> Total price : ${total_amount} </h2>
     <button class='update'onclick=window.location.reload()>update</button>
          <button class='checkout'>checkout</button>
     </div>
   `
 }

 Total_amount()
