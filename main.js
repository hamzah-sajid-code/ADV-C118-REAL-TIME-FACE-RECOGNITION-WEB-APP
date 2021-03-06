function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(540, 320);
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 400);
    classifire = ml5.imageClassifier('https://storage.googleapis.com/tm-model/EqyTYJiBe/model.json', modelLoaded);
}
function draw(){
    image(video, 0, 0, 400, 400);
    classifire.classify(video, gotResult);
}
function modelLoaded(){
    console.log('Successfully loaded the model')
}
function gotResult(error, results){
    if(error){
        console.error(error);
    } else{
        console.log(results);
        object_name = document.getElementById('object_name');
        accuracy_number = document.getElementById('accuracy_number');
        mainResultOfName = results[0].label;
        mainResultOfAccuracy = results[0].confidence;
        object_name.innerHTML = mainResultOfName;
        accuracy_number.innerHTML = mainResultOfAccuracy.toFixed(3);
    }
}