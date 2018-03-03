class SceneEnd extends GameScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        const game = this.game
        this.bg = GameImage.new(game, 'bg')
        this.addElement(this.bg)

        game.registerAction('r', function(){
            const s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        // draw labels
        // const ctx = this.game.context
        const style = {font: '25px serif', color: 'orange'}
        this.game.drawText('游戏结束', 130, 300, style)
        this.game.drawText('按 r 回到标题', 110, 350, style)
        // ctx.fillStyle = "orange";
        // ctx.font = '25px serif';
        // ctx.fillText('游戏结束', 120, 300)
        // ctx.fillText('按 r 返回标题界面', 90, 350)
    }
}
