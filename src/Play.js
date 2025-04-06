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
    }

    create() {
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tiles1', 'tileSetImage')
        const bgLayer = map.createLayer('Tile Layer 1', tileset, 0, 0)
    }

    update() {

    }
}