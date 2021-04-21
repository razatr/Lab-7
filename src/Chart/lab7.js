function f(x) {
    return x + Math.exp(-x) - Math.exp(-1)
}

export const func = []
const n = 6
const h = 1 / (n - 1)
const a = new Array(n)
const b = new Array(n)
const c = new Array(n)
const d = new Array(n)

for (let i = 0; i <= 30; i++) {
    let x = i / 30
    func.push({
        x: x,
        y: f(x)
    })
}

function tridiagonalAlgorithm(a, b, c, d) {
    const t1 = []
    const t2 = []
    const res = []
    t1[0] = c[0] / b[0]
    t2[0] = -d[0] / b[0]

    for(let i = 1; i < n; i++) {
        const denom = b[i] - a[i] * t1[i - 1]
        t1[i] = c[i] / denom
        t2[i] = (a[i] * t2[i - 1] - d[i]) / denom
    }

    res[n - 1] = t2[n - 1]

    for(let i = n - 2; i >= 0; i--) {
        res[i] = t2[i] + res[i + 1] * t1[i]
    }
    return res
}

a[0] = 0
a[n-1] = 0
b[0] = 1
b[n-1] = -1
c[0] = 1
c[n-1] = 0
d[0] = h**2 / 2
d[n-1] = 1

for(let i = 1; i < n - 1; i++) {
    a[i] = 2 - h
    b[i] = 4
    c[i] = 2 + h
    d[i] = 2 * h**2
}

const res1 = tridiagonalAlgorithm(a, b, c, d)
d[0] = 0
const res2 = tridiagonalAlgorithm(a, b, c, d)

export const f1 = []
export const f2 = []

for(let i = 0; i < n; i++) {
    let x = i / (n - 1)
    f1.push({
        x: x,
        y: res1[i]
    })
    f2.push({
        x: x,
        y: res2[i]
    })
}
