class GameLabel extends GameObject  {
    constructor(game) {
        super(game)
        this.game = game
        this.score = 0
        // this.text = `分数： ${this.score}`
        this.context = game.context
    }


    draw() {
        const score = this.score.toFixed(1)
        this.game.drawText(`TIME： ${score}`, 10, 20, {color: 'white', font: '25px serif'})
    }

    update() {
        this.score = this.scene.score
    }
}
