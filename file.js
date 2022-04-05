var async = require("async")
var arr = [1, 2, 3, 4, 5]
async.each(
    arr,
    function (item, callback) {
        if (typeof item === "number") {
            callback()
        } else {
            callback("Нашли не число")
        }
    },
    function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log("Проверка прошла успешно. Все элементы массива являются числами")
        }
    }
)
