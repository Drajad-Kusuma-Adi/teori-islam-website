let cvs = document.getElementById('gameMap');
let ctx = cvs.getContext('2d');

cvs.width = 1080;
cvs.height = 720;

let grid = 40;
let settlements = [
    {
        name: 'Delhi',
        x: 200,
        y: 100,
        dropX: 455,
        dropY: 355
    }
    // tambahin lagi pemukimannya
]
let playerX = cvs.width/2;
let playerY = cvs.height/2;

function drawGrid() {
    for (let i = 0; i <= cvs.width; i += grid) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.strokeRect(i, 0, grid, cvs.height);
    }
    for (let i = 0; i < cvs.height; i += grid) {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'white';
        ctx.strokeRect(0, i, cvs.width, grid);
    }
}

function initPlayer() {
    let sprite = new Image();
    sprite.src = './assets/ship.jpg';
    sprite.onload = function() {
        ctx.drawImage(sprite, playerX, playerY);
    }
}


function initSettlements() {
    settlements.forEach(settlement => {
        let sprite = new Image();
        sprite.src = './assets/settlement.jpg'
        sprite.width = grid;
        sprite.height = grid;
        sprite.onload = function() {
            ctx.drawImage(sprite, settlement.x, settlement.y);
            ctx.font = "30px Roboto";
            // textnya mungkin bisa lebih bagus
            ctx.fillText(settlement.name, settlement.x, settlement.y + 80);
        }
    });
}

function main() {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    drawGrid();
    initPlayer();
    initSettlements();
}
main();

document.getElementById('gameMap').addEventListener('click', (event) => {
    event.preventDefault();

    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    playerX = x;
    playerY = y;
    main();

    console.log('X: ' + x);
    console.log('Y: ' + y);
    console.log('PX: ' + playerX);
    console.log('PY: ' + playerY);

    // Overhaul:
});