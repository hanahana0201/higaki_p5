const w = 5000
const N = 20
const d = w / N

// Color Scheme (light, dark)
const colorSchemes = []
// Blue
colorSchemes[0] = ["#0fb4e1", "#07a0dc"]
// Red
colorSchemes[1] = ["#f54341", "#c81211"]
// Gold
colorSchemes[2] = ["#f0d588", "#e9cb82"]

function setup() {
  createCanvas(w, w, SVG)
  noFill()
  strokeWeight(d / 5)
  rectMode(CENTER)

  // colorScheme = random(colorSchemes)
  colorScheme = colorSchemes[2]
}

function draw() {
  background(colorScheme[0])
  stroke(colorScheme[1])
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      const dy = (i % 2 === 0) ? 0 : d / sqrt(2)
      const pos = [d * i * sqrt(2), d * j * sqrt(2) + dy]
      const r = (i % 2 === 0) ? -PI / 4 : PI / 4
      push()
      translate(...pos)
      rotate(r)
      rect(0, 0, d, d * 2)
      pop()
    }
  }

  save("higaki_03.svg");
  print("saved svg");
  noLoop();
}