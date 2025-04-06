class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    init() {

    }

    preload() {
        this.load.path = './assets/'
        this.load.image("mars", "mars.png")
    }

    create() {
        this.add.image(gameCenterX, gameCenterY, "mars").setScale(0.05)
        this.add.text(gameCenterX, gameCenterY-30, "RED PLANET: THE MARTIAN").setOrigin(0.5)
        this.add.text(gameCenterX, gameCenterY)
        
        const startButton = this.add.text(gameCenterX, gameCenterY+20, "START").setOrigin(0.5)
        startButton.setInteractive();
        startButton.on('pointerdown', () => this.scene.start("playScene"))

    }

    update() {

    }
}