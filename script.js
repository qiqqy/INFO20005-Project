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