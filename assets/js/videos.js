var videobtns = document.getElementsByClassName("videobtns");
var videos = document.getElementsByClassName("videos");
videobtns[0].addEventListener("click", function(){
    if(videos[0].classList.contains("vactive")){
        videos[0].classList.remove("vactive");
        videos[1].classList.add("vactive");
    }else {
        videos[1].classList.remove("vactive");
        videos[0].classList.add("vactive");
    }
})

videobtns[1].addEventListener("click", function(){
    if(videos[0].classList.contains("vactive")){
        videos[0].classList.remove("vactive");
        videos[1].classList.add("vactive");
    }else {
        videos[1].classList.remove("vactive");
        videos[0].classList.add("vactive");
    }
})