  //********** */ image gallery

  function imgGallery(){
    const mainImg = document.querySelector('.details-img'),
    smallImg = document.querySelectorAll('.details-small-img');

    smallImg.forEach((img) => {
      img.addEventListener('click', function(){
        mainImg.src = this.src;
      })
    
    })
  }

  imgGallery();

//****** */ details and review slide function
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

  //*****ADMIN FUNCTIONS**********/ 

  function show(){
    const message = document.getElementById("message");

    if(message.className === 'menu1'){
      message.className += "menu1"
    } else{
      message.className = 'menu1';
    }
  }


  document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalClose = document.getElementById('modalClose');
    
    // Open modal
    readMoreBtn.addEventListener('click', function() {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
    
    // Close modal
    modalClose.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close when clicking outside modal
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});