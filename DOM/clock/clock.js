let clock =  new Date()
let hour = clock.getHours()
let min = clock.getMinutes()
let dol = clock.get
let mill = clock.getMilliseconds()
let main = document.getElementsByClassName("contain")[0]
let show = document.createElement("h1")
show.innerHTML = `${hour}:${min}:${mill}`
main.appendChild(show)
goon()

function goon(){
    let clock =  new Date()
    let hour = clock.getHours()
    let min = clock.getMinutes()
    let mill = clock.getMilliseconds()
    show.innerHTML = `${hour}:${min}:${mill}`
    setInterval(goon, 1000)
}