function setup(){
    createCanvas(500,500)
}

function draw(){

}

function keyPressed(keyEvent){
    console.log(keyEvent.code)
    var key = keyEvent.code.toLowerCase()

    switch(key){
        case 'keye':
        console.log('Hey');
        break;
    }
    
}