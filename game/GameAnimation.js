
class GameAnimation {
    constructor(game) {
        this.game = game
        this.animations = {
            idle: [],
        }
        for(let i = 1; i < 4; i++) {
            const name = `b${i}`
            const t = game.textureByName(name)
            this.animations["idle"].push(t)
        }
        this.animationName = 'idle'
        this.texture = this.frames()[0]
        this.w = this.texture.width
        this.h = this.texture.height
        this.frameIndex = 0
        this.frameCount = 3

        this.flipX = false
        this.rotation = 0

        // 重力加速度
        this.gy = 10
        this.vy = 0

        this.alpha = 1
    }

    static new(game) {
        return new this(game)
    }

    frames() {
        return this.animations[this.animationName]
    }

    jump() {
        this.vy = -10
        this.rotation = -45
    }

    update() {
        // 更新 alpha
        if(this.alpha > 0) {
            this.alpha -= 0.05
        }
        // 更新受力
        this.y += this.vy
        this.vy += this.gy * 0.2
        const h = 480
        if(this.y > h) {
            this.y = h
        }

        // 更新角度
        if(this.rotation < 45) {
            this.rotation += 5
        }

        this.frameCount --
        if(this.frameCount == 0) {
            this.frameCount = 3
            this.frameIndex = (this.frameIndex + 1) % this.frames().length
            this.texture = this.frames()[this.frameIndex]
        }
    }

    draw() {
        const context = this.game.context
        context.save()
        const w2 = this.w / 2
        const h2 = this.h / 2

        context.translate(this.x + w2, this.y + h2)
        if(this.flipX) {
            context.scale(-1, 1)
        }

        context.globalAlpha = this.alpha
        context.rotate(this.rotation * Math.PI / 180)
        context.translate(-w2, -h2)
        context.drawImage(this.texture, 0, 0)
        context.restore()
    }
    move(x, keyStatus) {
        this.flipX = x < 0
        this.x += x
    }

    changeAnimation(name) {
        this.animationName = name
    }

    collide(pipe) {
        const a = this
        const b = pipe
        if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
}

const aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}