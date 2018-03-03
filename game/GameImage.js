class GameImage {
    constructor(game, name) {
        this.game = game
        // log('game iamge', name)
        this.texture = game.textureByName(name)
        // log('texure', game.textureByName(name))
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    
        this.flipY = false
        this.rotation = 0

    }
    static new(game, name) {
        const i = new this(game, name)
        return i
    }
    draw() {
        this.game.drawImage(this)
    }
    update() {

    }
}

