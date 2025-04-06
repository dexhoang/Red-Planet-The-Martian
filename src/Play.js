class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {

    }

    preload() {
        this.load.path = './assets/'
        this.load.image('tileSetImage', 'lab_tileset.png')
        this.load.tilemapTiledJSON('tilemapJSON', 'MarsMapin.json') 

        this.load.spritesheet('player', 'playerWalk.png', {
            frameWidth: 64,
            frameHeight: 64
        })
    }

    create() {
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tiles1', 'tileSetImage')
        const bgLayer = map.createLayer('Tile Layer 1', tileset, 0, 0)

        //player
        const playerSpawn = map.findObject('Spawns', (obj) => obj.name === 'spawn')
        this.player = this.physics.add.sprite(playerSpawn.x, playerSpawn.y, 'player', 0)

        //camera
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    }

    update() {

    }
}