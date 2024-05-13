
const burgerIcon = document.querySelector('.burger-icon'); 
const headerLists = document.querySelectorAll('.header__list');


burgerIcon.addEventListener('click', function() { 
    const screenWidth = window.innerWidth; 
    const isListVisible = headerLists[0].style.display === 'block'; 
     
    if (screenWidth < 400 && !isListVisible) { 
        headerLists.forEach(list => { 
            list.style.display = 'block'; 
        }); 
    } else { 
 
        headerLists.forEach(list => { 
            list.style.display = 'none'; 
        }); 
    } 
});

var mylinks = document.querySelector(".navigation-links");

document.addEventListener("DOMContentLoaded", function() {
   
    showLoadingSpinner();

 
    setTimeout(hideLoadingSpinner, 2500);
});





function showLoadingSpinner() {
    document.querySelector('.loading-overlay').style.display = 'block';
}

function hideLoadingSpinner() {
    document.querySelector('.loading-overlay').style.display = 'none';
}
