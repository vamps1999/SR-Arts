const photoCards = document.querySelectorAll(".photocard");
window.addEventListener("scroll", slidePhotoCards);
slidePhotoCards();
function slidePhotoCards() {
  const triggerBottom = (window.innerHeight / 4) * 3;
  photoCards.forEach((photoCard) => {
    const photoCardTop = photoCard.getBoundingClientRect().top;
    if (photoCardTop < triggerBottom) {
      photoCard.classList.add("show");
    } else {
      photoCard.classList.remove("show");
    }
  });
}
