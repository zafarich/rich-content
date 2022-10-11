void function () {
    window.JSON = Object.create(JSON)

    JSON.stringify = function (obj) {
        return JSON.__proto__.stringify(obj, function (key, value) {
            if (typeof value === 'function') {
                return value.toString()
            }
            return value
        })
    }

    JSON.parse = function (obj) {
        return JSON.__proto__.parse(obj, function (key, value) {
            if (typeof value === 'string' && value.slice(0, 8) == 'function') {
                return Function('return ' + value)()
            }
            return value
        })
    }
}()