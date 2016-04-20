document.addEventListener('deviceready', deviceready, false);
function deviceready() {
        console.log('deviceready');
}

document.addEventListener("deviceready", ready, false);
function ready() {
        var camBtn = document.querySelector("#getPicture");
        camBtn.addEventListener("touchstart", beginCamera, false);
}
function beginCamera(e) {
        e.preventDefault();
        navigator.camera.getPicture(cameraSuccess, cameraError, 
                { 
                        quality:50,
                        destinationType: Camera.DestinationType.FILE_URI,
                        targetWidth:350,
                        targetHeight:350
                });
}
function cameraError(e) {
        navigator.notification.alert("Sorry, the camera didn't work.", null);
}
function cameraSuccess(uri) {
        document.querySelector("#pictureResult").src = uri;
}
