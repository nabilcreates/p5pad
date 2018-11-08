var sound_perc;
var sound_hihat;
var sound_kick;
var sound_snare;

function preload() {
    sound_perc = loadSound("./sounds/perc.wav")
    sound_hihat = loadSound("./sounds/hihat.wav")
    sound_kick = loadSound("./sounds/kick.wav")
    sound_snare = loadSound("./sounds/snare.wav")
}

function setup() {
    createCanvas(500, 500)
}

function draw() {

}

function keyPressed(keyEvent) {
    console.log(keyEvent.code)
    var key = keyEvent.code.toLowerCase()

    switch (key) {
        case 'keye':
            sound_perc.play()
            break;

        case 'keyw':
            sound_hihat.play()
            break;

        case 'keyq':
            sound_kick.play()
            break;

        case 'keyr':
            sound_snare.play()
            break;
    }

}