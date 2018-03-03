class SceneTitle extends GameScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        log('title setup')
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
        log('title draw')
        
        super.draw()
        // draw labels
        const style = {font: '25px serif', color: 'orange'}
        this.game.drawText('按 k 开始游戏', 120, 300, style)
        
        // const ctx = this.game.context
        // ctx.fillStyle = "orange";
        // ctx.font = '25px serif';
        // ctx.fillText('按 k 开始游戏', 120, 300)
    }

}


