class PlayerMovement extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setCollideWorldBounds(true)
        this.body.setSize(30, 50)
        this.body.offset.y = 12

        scene.playerFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),

        }, [scene, this])
    }
}

class IdleState extends State {
    enter(scene, player) {
        player.setVelocity(0)
        player.anims.play('idle')
    }

    execute(scene, player) {
        const { left, right, up, down } = scene.keys

        if (left.isDown || right.isDown || down.isDown || up.isDown ) {
            this.stateMachine.transition('move')
            return
        }
    }

}

class MoveState extends State {
    execute(scene, player) {
        const { left, right, up, down } = scene.keys

        if(!(left.isDown || right.isDown || up.isDown || down.isDown)) {
            this.stateMachine.transition('idle')
            return
        }

        if (left.isDown) {
            player.setVelocityX(-100)
            player.anims.play('walkLeft', true)
        } else if (right.isDown) {
            player.setVelocityX(100)
            player.anims.play('walkRight', true)
        } else if (down.isDown) {
            player.setVelocityY(100)
            player.anims.play('walkBackward', true)
        } else if (up.isDown) {
            player.setVelocityY(-100)
            player.anims.play('walkForward', true)
        }
    }
}