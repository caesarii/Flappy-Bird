const es = sel => document.querySelectorAll(sel)
const bindAll = function(sel, eventName, callback) {
    const l = es(sel)
    for(let i = 0; i < l.length; i++) {
        const input = l[i]
        input.addEventListener(eventName, function(event) {
            callback(event)
        })
    }
}

const templateControl = function(key, item) {
    const t =
      `
                 <div>
                 <label for="" class="gua-label">
                 <input type="range" class="gua-auto-slider" id=""
                       value="${item.value}"
                       data-value="config.${key}"
                 >
                 ${item._comment}：<span class="gua-label"></span>
                 </label>
                 </div>

                `
    return t
}
const insertControls = function() {
    const div = e('.gua-controls')
    const keys = Object.keys(config)
    for( let k of keys) {
        const item = config[k]
        const html = templateControl(k, item)
        div.insertAdjacentHTML('beforeend', html)
    }
}

const bindEvents = function() {
    bindAll('.gua-auto-slider', 'input', function(event) {
        const target = event.target
        const bindVar = target.dataset.value
        const v = target.value
        eval(bindVar + ".value=" + v)
        const label = target.closest('label').querySelector('.gua-label')
        label.innerText = v
        
    })
}
const main = function() {
    // 生成配置
    insertControls()
    bindEvents()
}

main()
