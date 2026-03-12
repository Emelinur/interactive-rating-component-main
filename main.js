const scoreBtnList = document.querySelectorAll(".rating-card__score-btn");
const submitButton=document.querySelector("#submit-btn");
const ratingState=document.querySelector("#ratingState");
const thankState=document.querySelector("#thankState");
const selectedRating=document.querySelector("#selected-rating")

let selectedRatingBtn
scoreBtnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log(btn)
    btn.classList.add("selected");
    selectedRatingBtn=btn.innerText;
    console.log(selectedRatingBtn)
  });
});
submitButton.addEventListener("click",()=>{
ratingState.classList.add("is-hidden");
thankState.classList.remove("is-hidden");
selectedRating.innerText=selectedRatingBtn;
})