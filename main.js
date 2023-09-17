navigator.mediaDevices.getUserMedia({audio: true});

function startClassification(){
    navigator.mediaDevices.getUserMedia( '' , modelReady)
}

function modelReady(){
    classifier(gotResults);
}