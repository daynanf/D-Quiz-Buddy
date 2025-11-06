const fileType = document.querySelector('.upload-file');
const textType =document.querySelector('.enter-text');
const fileTypeBtn =document.querySelector('.file-upload-type');
const textTypeBtn = document.querySelector('.text-type');
fileTypeBtn.addEventListener("click",()=>{
  fileType.style.display= "block";
    textType.style.display= "none";
    fileTypeBtn.style.background = "white";
    textTypeBtn.style.background = "#eef2ed";
  }
)
textTypeBtn.addEventListener("click",()=>{
  fileType.style.display= "none";
    textType.style.display= "block";
    fileTypeBtn.style.backgroundColor = "#eef2ed";
    textTypeBtn.style.backgroundColor = "white";
  }
)

