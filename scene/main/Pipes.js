class Pipes  {
    constructor(game) {
        this.game = game
        this.pipes = []
        this.pipeSpace = 200
        this.管子横向间距 = 200
        this.columnsOfPipe = 3
        for(let i =0; i < 3; i++) {
            const p1 = GameImage.new(game, 'pipe')
            p1.flipY = true
            p1.x = 500 + i * this.管子横向间距
            const p2 = GameImage.new(game, 'pipe')
            p2.x = p1.x
            this.resetPipesPosition(p1, p2)
            this.pipes.push(p1)
            this.pipes.push(p2)
        }
    }

    static new(game) {
        return new this(game)
    }

    resetPipesPosition(p1, p2) {
        p1.y = randomBetween(-200, 0)
        p2.y = p1.y + p1.h + this.pipeSpace
    }

    update() {
        for(let p of this.pipes) {
            p.x -= 5
            if(p.x < -100) {
                p.x += this.管子横向间距 * this.columnsOfPipe
            }
        }
    }
    draw() {
        const context = this.game.context
        for(let p of this.pipes) {
            context.save()
            const w2 = p.w / 2
            const h2 = p.h / 2

            context.translate(p.x + w2, p.y + h2)
            const scaleX = p.flipX ? -1 : 1
            const scaleY = p.flipY ? -1 : 1
            context.scale(scaleX, scaleY)
            context.rotate(p.rotation * Math.PI / 180)
            context.translate(-w2, -h2)
            context.drawImage(p.texture, 0, 0)
            context.restore()
        }
    }


}