function showImage(imageUrl) {
  var popup = document.getElementById("image-popup");
  var popupImage = document.getElementById("popup-image");

  popupImage.src = imageUrl;
  popup.style.display = "block";
}

function hideImage() {
  var popup = document.getElementById("image-popup");
  popup.style.display = "none";
}
