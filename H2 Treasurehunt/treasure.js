//Da jeg lavede det kom jeg til at lave det hele på 67% scallering på chrome
//Så man skal sætte den til 67% for at kunne se det hele på engang


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const distance = document.getElementById('distance');
const distanceX = document.getElementById('x');
const distanceY = document.getElementById('y');
let countTries = 5;

const img = new Image();
img.src = 'treasuremap.png'
img.onload = () => {
    ctx.drawImage(img, -20, -130)
}

const x2 = Math.floor(990 * Math.random());
const y2 = Math.floor(600 * Math.random());

function getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top



    var treasureDistance = Math.floor(Math.hypot(x2-x, y2-y));

    if (y2 > y) {
        document.getElementById('y').innerHTML = "Go down";
    }

    if (y2 < y) {
        document.getElementById('y').innerHTML = "Go up";
    }

    if (x2 < x) {
        document.getElementById('x').innerHTML = "Go left";
    }

    if (x2 > x) {
        document.getElementById('x').innerHTML = "Go right";
    }

    distance.innerHTML = treasureDistance;

    if (treasureDistance <= 50) {
        var chest = document.getElementById("chestAppear");
        chest.style.display = 'block';
        chest.style.left = x + 'px';
        chest.style.top = y + 'px';
        chest.style.width = '200px';
        chest.style.height = '200px';
        chest.style.position = 'fixed'; 
        chest.style.zIndex = '999';
        setTimeout("location.reload(true);", 15000);
        document.getElementById('heading1').innerHTML = "You found the Treasure!! The game will restart in 15 seconds";
    }
    
    console.log(x + "\n" + y)

}


canvas.addEventListener("click", function() {
    countTries -= 1;
    document.getElementById('tries').innerHTML = countTries;
    if (countTries <= 0) {
        setTimeout("location.reload(true);", 15000);
        document.getElementById('heading1').innerHTML = "Unlucky. You have used your 15 tries. The game will now restart in 5 seconds";
    }

    const rect = canvas.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    
    var treasureDistance = Math.floor(Math.hypot(x2-x, y2-y));
  
  if (countTries <= 0 && treasureDistance <= 50) {
    var chest = document.getElementById("chestAppear");
    chest.style.display = 'block';
    chest.style.left = x + 'px';
    chest.style.top = y + 'px';
    chest.style.width = '200px';
    chest.style.height = '200px';
    chest.style.position = 'fixed'; 
    chest.style.zIndex = '999';
    setTimeout("location.reload(true);", 15000);
    document.getElementById('heading1').innerHTML = "You found the Treasure!! The game will restart in 15 seconds";
  }
  console.log(treasureDistance)
  });
  

canvas.addEventListener('mousedown', function(e) {
    getCursorPosition(canvas, e)
})

console.log("The treasure is at \n x: " + x2 + " y: " + y2)

