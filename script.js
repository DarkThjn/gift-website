let code=""
let audio=new Audio()

const dots=document.querySelectorAll(".dot")

function updateDots(){

dots.forEach((d,i)=>{

d.classList.toggle("active",i<code.length)

})

}

function press(num){

code+=num

updateDots()

if(code.length===4){

setTimeout(checkCode,300)

}

}

function checkCode(){

if(code===PASSCODE){

unlock()

}else{

code=""
updateDots()

}

}

function unlock(){

document.getElementById("lockscreen").style.display="none"

document.getElementById("menu").classList.remove("hidden")

}

function createKeypad(){

let keypad=document.getElementById("keypad")

for(let i=1;i<=9;i++){

let b=document.createElement("button")

b.innerText=i

b.onclick=()=>press(i)

keypad.appendChild(b)

}

let b=document.createElement("button")

b.innerText=0

b.onclick=()=>press(0)

keypad.appendChild(b)

}

createKeypad()

/* letter */

document.getElementById("letterText").innerText=letterText

function openLetter(){

openModal("letterModal")

}

/* gallery */

function openGallery(){

let grid=document.getElementById("galleryGrid")

grid.innerHTML=""

galleryImages.forEach(img=>{

let i=document.createElement("img")

i.src=img

grid.appendChild(i)

})

openModal("galleryModal")

}

/* music */

let songIndex=0

function playSong(){

audio.src=playlist[songIndex].file

audio.play()

document.getElementById("songTitle").innerText=
playlist[songIndex].title

}

function pauseSong(){
audio.pause()
}

function nextSong(){

songIndex++

if(songIndex>=playlist.length)
songIndex=0

playSong()

}

function prevSong(){

songIndex--

if(songIndex<0)
songIndex=playlist.length-1

playSong()

}

function openMusic(){
openModal("musicModal")
}

/* gift */

function openGift(){
openModal("giftScene")
}

function openGiftBox(){

document.querySelector(".lid").style.transform="translateY(-80px) rotate(-10deg)"

spawnPhotos()

}

function spawnPhotos(){

galleryImages.forEach(img=>{

let p=document.createElement("img")

p.src=img

p.className="giftPhoto"

p.style.left="50%"
p.style.top="50%"

document.getElementById("giftPhotos").appendChild(p)

setTimeout(()=>{

let x=(Math.random()-0.5)*500
let y=(Math.random()-0.5)*300

p.style.transform=`translate(${x}px,${y}px) rotate(${Math.random()*360}deg)`

},100)

})

}

/* modal */

function openModal(id){

document.getElementById(id).style.display="flex"

}

function closeModal(){

document.querySelectorAll(".modal").forEach(m=>m.style.display="none")

}