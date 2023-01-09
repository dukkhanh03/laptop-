function openPopup() { // Click vào button thì gán style cho Popup là display:block để hiển thị lên
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlays").style.display = "block";
}

function closePopup() { // Click vào close thì gán style cho Popup là display:none để ẩn đi
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlays").style.display = "none";
}
 