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
    scene: [ Load, Menu, Play ]
}

const game = new Phaser.Game(config)
const gameCenterX = config.width/2
const gameCenterY = config.height/2