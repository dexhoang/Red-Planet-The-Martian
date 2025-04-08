class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = './assets/'
        this.load.spritesheet('player', 'playerHelmet.png', {
            frameWidth: 64,
            frameHeight: 64
        })
    }

    create() {
        this.anims.create({
            key: 'idle',
            frameRate: 5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 0
            })
        })

        this.anims.create({
            key: 'walkForward',
            frameRate: 10,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 0,
                end: 8
            })
        })
        
        this.anims.create({
            key: 'walkLeft',
            frameRate: 10,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 9,
                end: 17
            })
        })

        this.anims.create({
            key: 'walkBackward',
            frameRate: 10,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 18,
                end: 26
            })
        })

        this.anims.create({
            key: 'walkRight',
            frameRate: 10,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('player', {
                start: 27,
                end: 35
            })
        })

        this.scene.start('menuScene')
    }
}