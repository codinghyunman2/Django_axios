const likeButton = document.getElementById("like-button")
const zzimButton = document.getElementById("zzim-button")

const likeColor = () => {
  if (likeButton.style.color == "red") {
    likeButton.style.color = "black"
  } else {
    likeButton.style.color = "red"
  }
}

const zzimColor = () => {
  if (zzimButton.style.color == "blue") {
    zzimButton.style.color = "black"
  } else {
    zzimButton.style.color = "blue"
  }
}

likeButton.addEventListener('click', likeColor)
zzimButton.addEventListener('click', zzimColor)