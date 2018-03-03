class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        const game = this.game
        this.bg = GameImage.new(game, 'bg')
        this.addElement(this.bg)

        game.registerAction('k', function(){
            log('title k')
            const s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }
    draw() {
        super.draw()
        // draw labels
        const style = {font: '25px serif', color: 'orange'}
        this.game.drawText('按 k 开始游戏', 120, 300, style)
    }

}


