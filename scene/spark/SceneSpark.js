
class SceneSpark extends GameScene {
    constructor(game) {
        super(game)
        const label = GameLabel.new(game, 'hello gua')
        this.addElement(label)

        const ps = GameParticleSystem.new(game)
        this.addElement(ps)
    }

}


