

// links
const sideLinksEl = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)')

sideLinksEl.forEach((links) => {
 const li = links.parentElement;
 links.addEventListener('click', ()=>{
    sideLinksEl.forEach((i) =>{
  i.parentElement.classList.remove('active')
    })  
    li.classList.add('active');
 })   
});

// sidebar
const menuBar = document.querySelector('.content nav .mnu');
const sideBarEl = document.querySelector('.sidebar');


menuBar.addEventListener('click', ()=>{
    sideBarEl.classList.toggle('close')
})

const searchBtn = document.querySelector('.content form .form-input button');
const searchIcon = document.querySelector('.content form .form-input button .srch');
const searchForm = document.querySelector('.content nav form');

searchBtn.addEventListener('click', function(e){
    if(window.innerWidth < 576){
        e.preventDefault;
        searchForm.classList.toggle('show')

     if(searchForm.classList.contains('show')) {
     searchIcon.classList.replace('fa-magnifying-glass', "fa-x")
     }  else{
        searchIcon.classList.replace('fa-x', "fa-magnifying-glass")
     }
    }
})

// resize

window.addEventListener('resize', ()=>{
    if(window.innerWidth < 768){
 sideBarEl.classList.add('close');
    }else{
        sideBarEl.classList.remove('close');
    }
})


// dark and light mode

const darkEl = document.querySelector('.side-menu ul li a');
const darkIcon = document.querySelector('.side-menu ul li .icn');

darkEl.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');

if( document.body.classList.contains('dark')){
    darkIcon.classList.replace('fa-moon', "fa-sun")
}else{
    darkIcon.classList.replace('fa-sun', "fa-moon")  
}

})
