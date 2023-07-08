function addReview() {
  var reviewInput = document.getElementById("reviewInput");
  var reviewText = reviewInput.value.trim();

  if (reviewText !== "") {
    var reviewList = document.getElementById("reviewList");
    var li = document.createElement("li");
    li.textContent = reviewText;
    reviewList.appendChild(li);
    reviewInput.value = "";

    // Save to localStorage
    var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    reviews.push(reviewText);
    localStorage.setItem("reviews", JSON.stringify(reviews));
  }
}

// Retrieve saved reviews
window.onload = function() {
  var reviews = JSON.parse(localStorage.getItem("reviews")) || [];
  var reviewList = document.getElementById("reviewList");

  reviews.forEach(function(review) {
    var li = document.createElement("li");
    li.textContent = review;
    reviewList.appendChild(li);
  });

  let selectedRating = 0;

  function rateStar(rating) {
    selectedRating = rating;

    const stars = document.getElementsByClassName('fa-star');
    for (let i = 0; i < stars.length; i++) {
      if (i < rating) {
        stars[i].classList.add('selected');
      } else {
        stars[i].classList.remove('selected');
      }
    }

    // Highlight specific stars
    if (rating === 3) {
      for (let i = 3; i < stars.length; i++) {
        stars[i].classList.remove('selected');
      }
    } else if (rating === 5) {
      for (let i = 0; i < stars.length; i++) {
        stars[i].classList.add('selected');
      }
    }

    document.getElementById('rating-value').value = rating;
  }

  function submitRating(event) {
    event.preventDefault();
    const ratingValue = document.getElementById('rating-value').value;
    // You can send the rating value to your server using AJAX or perform any other action here
    console.log('Submitted rating:', ratingValue);
  }
};