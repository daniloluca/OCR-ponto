var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        console.log("Device Ready!");
        tesseractOCR.load(function(callback){
            console.log("Tesseract OCR said: ", callback);

            var btnCamera = document.getElementById("btnCamera");

            btnCamera.onclick = getPicture;
            btnCamera.disabled = false;
        });
    }
};

app.initialize();

function getPicture(){
    navigator.camera.getPicture(function(imageURL){
        tesseractOCR.recognizeImage(imageURL, function(result){
            // alert(result);
            console.log(result);
        });
    }, function(message){
        alert('Something Happened: ' + message);
    }, {
        destinationType: Camera.DestinationType.FILE_URI
    });
}