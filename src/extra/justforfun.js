const makeCircle = (cx, cy, r, bottom) => {
  let duration = Math.floor( ( Math.sin(cx) +  Math.cos(cx) ) * 10 )+Math.random()*10
  let style = `
    animation-name: rain;
    animation-duration: ${duration}s;
    animation-iteration-count: infinite;
  `

  return (
    `<circle style="${style}" cx="${cx}" cy="${cy}" r=${r} class="dot">
     </circle>`
  );
}

export default function makeItRain(n) {
  let height = document.body.clientHeight;
  let width = document.body.clientWidth;

  document.body.innerHTML += `<svg id="snow-field" width="1000" height="1000" style="position:relative"></svg>`

  let svg = document.getElementById("snow-field")

  let circles = Array(n).fill().map(()=>{
    let x = Math.floor(Math.random() * width)
    let r = Math.floor(Math.random() * 10)
    let circle = makeCircle(x, -100, r, 500, 10)
    svg.innerHTML += circle
  })
}
