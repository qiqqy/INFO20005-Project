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
}

function closeConfirmation() {
    document.getElementById("confirmation").style.width = "0";
    document.getElementById("confirmation").style.display = "none";
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

function redirectToCheckout() {
    window.location.href = "checkout.html";
}
