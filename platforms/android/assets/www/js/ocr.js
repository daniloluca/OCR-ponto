document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
	TesseractPlugin.loadLanguage("por", function(response) {
		getPicture();
	}, function(reason) {
		alert('Error on loading OCR file for your language. ' + reason);
	});
}

function getPicture(){
	navigator.camera.getPicture(function(imageData){
		//var image = "data:image/jpeg;base64," + imageData;

		TesseractPlugin.recognizeText(imageData, "por", function(recognizedText) {
			alert(recognizedText);
		}, function(reason) {
			console.log('Error on recognizing text from image. ' + reason);
		});
	}, function(message){
		alert('Something wrong is not right with the camera: ' + message);
	}, {
    	destinationType: Camera.DestinationType.DATA_URL
	});
}
