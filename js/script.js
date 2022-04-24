const btnClick = (btn) => {
    btn.style.transform = "scale(1.1)"
    setTimeout(() => {
        btn.style.transform = "none"; 
    }, 500);
    document.querySelector(".loadingContainer").style.display = "flex";
    document.querySelector(".load").focus();
}

const closeLoad = () => {
    document.querySelector(".loadingContainer").style.display = "none";
}