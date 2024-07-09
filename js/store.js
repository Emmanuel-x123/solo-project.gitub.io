//PRODUCT TABS
  const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[content]');

  //to iterate with foreach
  tabs.forEach((tab)=>{
    tab.addEventListener('click', () =>{
      const target = document.querySelector(tab.dataset.target);
      console.log(target)
      tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab')
      });
      target.classList.add('active-tab');

      tabs.forEach((tab) => {
        tab.classList.remove('active-tab')
      });

      tab.classList.add('active-tab')
    });
    });
    // the end of tab section

//DEALS COUNT DOWN SECTION
const months = [
  "jenuary",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
   ];

   const weekdays = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",  
  ];

  // TARGETING MY DIVS ID AND CLASS
  const sales = document.getElementById('fastsales'),
   countdown = document.getElementById('countdown'),
   items = document.querySelectorAll('.countdown-amount p');

   let futureDate = new Date(2024,7,29,11,50,0); //targetting a specific date

   const year = futureDate.getFullYear();
   const hours = futureDate.getHours();
   const minutes = futureDate.getMinutes();
   let month = futureDate.getMonth();
   month = months[month];
   const date = futureDate.getDate();
   const weekday = weekdays [futureDate.getDay()];

  //  sales.textContent = `promo sales ends on ${weekday} ${date} ${month} ${year} ${hours}:
  //  ${minutes}`; 

     //future time in ms
     const futureTime = futureDate.getTime();

 
    //run a funtion for remaining time 
    
    function getRemainingTime() {
      const today = new Date() .getTime();
      const t = futureTime - today; //math operation
    
      //1s = 1000ms
      //1m = 60s
      //1hr = 60m
      //1d = 24hr
  
      //values in ms
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000; 
      //calculate all values 
      let days = t / oneDay;
      days = Math.floor(days);  //calculating the values for days hour mims & secs
      let hours =Math.floor((t % oneDay) / oneHour);
      let minutes = Math.floor((t % oneHour) / oneMinute);
      let seconds = Math.floor((t % oneMinute) / 1000);
      
  
      //set value arrays
      const values = [days, hours, minutes, seconds];
     
     function format(item) {
      if (item < 10) {
        return (item = `0${item}`);
      }
       return item
     }
  
      items.forEach(function(item,index){
          item.innerHTML = format (values[index]);
      });
      if (t < 0){
        clearInterval(countdown);
        countdown.innerHTML = `<p class="dealscountdown-text">sorry, this promo
         has expired </p>`;
      }
  };
  
  let countDown = setInterval(getRemainingTime,1000);//call back the function
  getRemainingTime(); //to invoke the funtion



  //****** */ show menu

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// menu-show
// validates if constants exist

if(navToggle){
  navToggle.addEventListener('click', () => {
   navMenu.classList.add('show-menu') 
  })
}

// hide-show
// validates if constants exist

if(navClose){
  navClose.addEventListener('click', () => {
   navMenu.classList.remove('show-menu') 
  })
}



/**
 *?  ADD TO CART FUNTIONALITY 
 **/
//  let shopItemsData = [
//   {
//    "id": 1,
//    "name": 'radient renewal',
//    "img": 'img/prjct-a.jpg',
//    "price": 250.99,
//    "desc": 'smooth rich in vitamin', 
//   },

//   {
//     "id": 2,
//     "name": 'coconut oil',
//     "img": 'img/prjct-c.jpg',
//     "price": 150.99,
//     "desc": 'smooth rich in vitamin', 
//    },


//    {
//     "id": 3,
//     "name": 'aloe vera',
//     "img": 'img/prdct4.jpg',
//     "price": 170.99,
//     "desc": 'smooth rich in vitamin', 
//    },   

//    {
//     "id": 4,
//     "name": 'eye care',
//     "img": 'img/prdct6.jpg',
//     "price": 350.99,
//     "desc": 'smooth rich in vitamin', 
//    },

//    {
//     "id": 5,
//     "name": 'pain killer',
//     "img": 'img/prdct8.jpg',
//     "price": 200.99,
//     "desc": 'instant relief', 
//    },   

//    {
//     "id": 6,
//     "name": 'cocoa butter',
//     "img": 'img/prjct9.jpg',
//     "price": 300.99,
//     "desc": 'smooth rich in vitamin', 
//    },

//    {
//     "id": 7,
//     "name": 'pear lottion',
//     "img": 'img/pear1.jpg',
//     "price": 250.99,
//     "desc": 'smooth rich in vitamin', 
//    },   

//    {
//     "id": 8,
//     "name": 'sanitory Pads',
//     "img": 'img/pad.jpg',
//     "price": 220.99,
//     "desc": 'smooth rich in vitamin', 
//    },  


// ]

const shop = document.getElementById('shop')
let basket = JSON.parse(localStorage.getItem('data')) || []

let generateShop = () =>{
  shop.innerHTML = shopItemsData.map((x) => {
   
    let {id,name,img,price,desc} = x

    return`
    <div class="shop-item product-item product-images" id=product-id-${id}>
       <img src="${img}" alt="" class="product-img default">
       <img src="img/logo.jpg" alt="" class="product-img hover">
  <div class='product-info '>
    <h5>${name}</h5>
    
       <p class='price'><span>$:</span>${price}</p>
       <p>${desc}</p>

       <button onclick ="add_to_cart('${id}','${img}','${name}','${price}')">add to cart</button>

      </div>
    </div>
    `
  })
}

let add_to_cart = (id,img,name,price) => {
basket.push({
  id:id,
  item:1,
  img:img,
  name:name,
  price:price
})

localStorage.setItem('data',JSON.stringify(basket))

calculate()
}

let calculate = () => {
  let cart_icon = document.querySelector('.counts')
  let cart_amount = basket.length

  cart_icon.innerHTML = cart_amount
}


generateShop()





