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

    if (window.location.hash === "#confirmation") {
        openConfirmation();
      }

      //adding to and removing from cart
    
    const addToCartButtons = document.getElementsByClassName("button--small");
  
    Array.from(addToCartButtons).forEach(function(addToCartButtons) {
      const addedButton = addToCartButtons.nextElementSibling;

      addedButton.style.display = 'none'; 
  
      addToCartButtons.addEventListener('click', function() {
        addToCartButtons.style.display = 'none';
        addedButton.style.display = 'block';
      });
  

      addedButton.addEventListener('click', function() {
        addToCartButtons.style.display = 'block';
        addedButton.style.display = 'none';
      });
    });
  };

function openMenu() {
    document.getElementById("menu").style.width = "20vw";
    document.getElementById("menu").style.minWidth = "150px";
    document.getElementById("menu").style.display = "block";
  }
  
function closeMenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("menu").style.display = "none";
  }
  
function openCart() {
    document.getElementById("cart").style.width = "30vw";
    document.getElementById("cart").style.minWidth = "200px";
    document.getElementById("cart").style.display = "block";
  }
  
function closeCart() {
    document.getElementById("cart").style.width = "0";
    document.getElementById("cart").style.display = "none";
}

function scrollToSection() {
  var targetSection = document.getElementById("bestsellers");
  targetSection.scrollIntoView({ behavior: 'smooth' });
}

function openConfirmation() {
    document.getElementById("confirmation").style.width = "100vw";
    document.getElementById("confirmation").style.display = "block";
    document.getElementById("searchbar").style.display = "none";
}

function closeConfirmation() {
    document.getElementById("confirmation").style.width = "0";
    document.getElementById("confirmation").style.display = "none";
    document.getElementById("searchbar").style.display = "block";
}

function redirectToHome() {
    window.location.href = "index.html#confirmation";

}

function redirectToShopping() {
    window.location.href = "shopping.html";
}

function redirectToProduct() {
    window.location.href = "product.html";
}

function redirectToProduct2() {
  window.location.href = "product2.html";
}

function redirectToCheckout() {
  window.location.href = "checkout.html";
}

