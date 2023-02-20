// 1
function showMessage() {
    console.log("Я учу JavaScript!");
}
showMessage();

// 2
let img = document.getElementById('img')

function getPicture(){
img.src = './images/sad.jpg';
img.alt = 'sad cat';
}

function getPicture2(){
    img.src = './images/happy.jpg';
    img.alt = 'happy cat';
    }
    