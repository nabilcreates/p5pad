// INIT BUTTON
var kickButton;
var hihatButton;
var percButton;
var snareButton;
var tomButton;

// INIT SOUNDS
var sound_perc;
var sound_hihat;
var sound_kick;
var sound_snare;
var sound_tom;

function preload() {
    sound_perc = loadSound("./sounds/perc.wav")
    sound_hihat = loadSound("./sounds/hihat.wav")
    sound_kick = loadSound("./sounds/kick.wav")
    sound_snare = loadSound("./sounds/snare.wav")
    sound_tom = loadSound("./sounds/tom.wav")

}

function setup() {

    // MAKE BUTTON CORRESPOND
    kickButton = select(".kick")
    hihatButton = select(".hihat")
    percButton = select(".perc")
    snareButton = select(".snare")
    tomButton = select(".tom")

    createCanvas(500, 500)
}

function draw() {
    kickButton.mousePressed(() => {
        console.log('Kick button pressed')
        sound_kick.play()
    })

    kickButton.mousePressed(() => {
        console.log('kickButton')
        sound_kick.play()
    })
    hihatButton.mousePressed(() => {
        console.log('hihatButton')
        sound_hihat.play()
    })
    percButton.mousePressed(() => {
        console.log('percButton')
        sound_perc.play()
    })
    snareButton.mousePressed(() => {
        console.log('snareButton')
        sound_snare.play()
    })
    tomButton.mousePressed(() => {
        console.log('tomButton')
        sound_tom.play()
    })

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

        case 'keyt':
            sound_tom.play()
            break;
    }

}