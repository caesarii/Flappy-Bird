const loadLevel = function(game, n) {
    n = n - 1
    const level = levels[n]
    const blocks = []
    for (let i = 0; i < level.length; i++) {
        const p = level[i]
        const b = Block.new(game, p)
        blocks.push(b)
    }
    return blocks
}

const enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        const k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event) {
        const input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

const __main = function() {
    const images = {
        // bullet: 'img/bullet.png',
        // cloud: 'img/cloud.png',
        // player: 'img/player.png',
        // sky: 'img/sky.png',
        // enemy0: 'img/enemy0.png',
        // enemy1: 'img/enemy1.png',
        // enemy2: 'img/enemy2.png',
        // enemy3: 'img/enemy3.png',
        // enemy4: 'img/enemy4.png',
        // fire: 'img/fire.png',
        // idle1: 'img/idle/idle1.png',
        // idle2: 'img/idle/idle2.png',
        // idle3: 'img/idle/idle3.png',
        // run1: 'img/run/run1.png',
        // run2: 'img/run/run2.png',
        // run3: 'img/run/run3.png',
        // run4: 'img/run/run4.png',
        // run5: 'img/run/run5.png',
        // run6: 'img/run/run6.png',
        // run7: 'img/run/run7.png',
        // run8: 'img/run/run8.png',
        // run9: 'img/run/run1.png',
        // run10: 'img/run/run2.png',
        bg: 'img/background.png',
        ground: 'img/ground.png',
        b1: 'img/b1.png',
        b2: 'img/b2.png',
        b3: 'img/b3.png',
        pipe: 'img/pipe.png'
    }
    const game = Game.new(30, images, function(g){
        // const s = new SceneMain(g)
        const s = SceneTitle.new(g)
        // const s = new SceneSpark(g)
        g.loadScene(s)
    })

    // enableDebugMode(game, true)
}

__main()
