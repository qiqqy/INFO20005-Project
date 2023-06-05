window.onload = function() {
    
    //adding and removing favourites
    
    const heartIcons = document.getElementsByClassName("icon--heart");
  
    Array.from(heartIcons).forEach(function(heartIcon) {
      const heartIconLiked = heartIcon.nextElementSibling;

      heartIconLiked.style.display = 'none'; // Hide the liked heart initially
  
      heartIcon.addEventListener('click', function() {
        heartIcon.style.display = 'none';
        heartIconLiked.style.display = 'block';
      });
  

      heartIconLiked.addEventListener('click', function() {
        heartIcon.style.display = 'block';
        heartIconLiked.style.display = 'none';
      });
    });
  };

function openMenu() {
    document.getElementById("menu").style.width = "200px";
    document.getElementById("menu").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.display = "none";
}

function openCart() {
    document.getElementById("cart").style.width = "400px";
    document.getElementById("cart").style.display = "block";
}

function closeCart() {
    document.getElementById("cart").style.width = "0";
    document.getElementById("cart").style.display = "none";
}