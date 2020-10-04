import _ from 'lodash'

console.log("a".charCodeAt(0))
const a = [{a: "a", num: 1}, {a: "b", num: 2}, {a: "c", num: 3}, {a: "d", num: 4},]
console.log(_.orderBy(a,["a"], ["dis"]))
