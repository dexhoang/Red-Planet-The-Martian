class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {
        this.VEL = 175
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
        //map
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tiles1', 'tileSetImage')
        const bgLayer = map.createLayer('Tile Layer 1', tileset, 0, 0)
        //map collisions
        bgLayer.setCollisionByProperty({collides: true})

        //player
        const playerSpawn = map.findObject('Spawns', (obj) => obj.name === 'spawn')
        this.player = this.physics.add.sprite(playerSpawn.x, playerSpawn.y, 'player', 0)
        this.player.body.setCollideWorldBounds(true)
        this.player.body.setSize(30, 50)
        this.player.body.offset.y = 12

        //camera
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
        this.cameras.main.startFollow(this.player, true, 0.25, 0.25)
        this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

        //input
        this.cursors = this.input.keyboard.createCursorKeys()

        //physics
        this.physics.add.collider(this.player, bgLayer)
    }

    update() {

        this.direction = new Phaser.Math.Vector2(0)
        if(this.cursors.left.isDown) {
            this.direction.x = -1
        } else if(this.cursors.right.isDown) {
            this.direction.x = 1
        }

        if(this.cursors.up.isDown) {
            this.direction.y = -1
        } else if(this.cursors.down.isDown) {
            this.direction.y = 1
        }

        this.direction.normalize()
        this.player.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y)
    }
}