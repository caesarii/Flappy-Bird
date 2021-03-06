
class SceneMain extends GameScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.grounds = []
        this.skipCount = 5
        this.score = 0
        const game = this.game

        // 背景
        const bg = GameImage.new(game, 'bg')
        this.addElement(bg)

        // pipes
        this.pipe = Pipes.new(game, 'pipe')
        this.addElement(this.pipe)

        // 地面
        this.addGrounds()

        // bird
        const b = GameAnimation.new(game)
        b.x = 180
        b.y = 200
        this.bird = b
        this.addElement(b)

        this.setupInputs()

        this.label = GameLabel.new(game)
        this.label.scene = this
        this.addElement(this.label)

    }

    addGrounds() {
        for(let i = 0; i < 30; i++) {
            const g = GameImage.new(this.game, 'ground')
            g.x = i * 19
            g.y = 540
            this.addElement(g)
            this.grounds.push(g)
        }
    }

    setupInputs() {
        const self = this
        const b = this.bird
        self.game.registerAction('a', (status) => {
            b.move(-2, status)
        })
        self.game.registerAction('d', (status) => {
            b.move(2, status)
        })
        self.game.registerAction('j', (status) => {
            b.jump()
        })
    }

    update() {
        super.update()

        // 更新时间
        this.score += 0.1

        const bird = this.bird
        const game = this.game
        this.pipe.pipes.forEach(function(pipe, index) {

            if(bird.collide(pipe)) {
                // alert('colidde')
                const s = new SceneEnd(game)
                game.replaceScene(s)
            }
        })

        // 地面移动
        this.skipCount--
        let offset = -5
        if(this.skipCount == 0) {
            this.skipCount = 4
            offset = 15
        }
        for(let i = 0; i < 30; i++) {
            const g = this.grounds[i]
            g.x += offset
        }
    }
}