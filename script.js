const canvas = document.getElementById("canvas")
const gl = canvas.getContext("webgl2")

if (!gl) {
    error("Your browser does not support WebGL")
    return
}

const vertices = [
    -0.5, -0.5, 0.0,
    0.5 -0.5, 0.0,
    -0.5, 0.5, 0.0,
    0.5, 0.5, 0.0,
]

const indices = [
    0, 1, 2,
    1, 2, 3
]

const vertexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verticies), gl.STATIC_DRAW)
gl.bindBuffer(gl.ARRAY_BUFFER, null)

const indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_BUFFER_ARRAY, indexBuffer)
gl.bufferData(gl.ELEMENT_BUFFER_ARRAY, Uint16Array(indices), gl.STATIC_DRAW)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null)