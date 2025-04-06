// Code Practice: Slime World
// Name: Dexter Hoang
// Date: 02/16/2024

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 320,
    height: 240,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Menu, Play ]
}

const game = new Phaser.Game(config)
const gameCenterX = config.width/2
const gameCenterY = config.height/2