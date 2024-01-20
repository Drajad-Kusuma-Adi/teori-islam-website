let cvs = document.getElementById('gameMap');
let ctx = cvs.getContext('2d');

cvs.width = 1280;
cvs.height = 720;

let player = {
    x: cvs.width / 2,
    y: cvs.height / 2
}
// let grid = new PF.Grid(150, 100);
// let finder = new PF.AStarFinder({
//     allowDiagonal: true
// });
// let targetX = 50;
// let targetY = 70;
// let path = finder.findPath(playerX, playerY, targetX, targetY, grid);
let cell = 10;
let emptyColor = '#000';
let wallColor = '#fff';
let pathColor = '#f00';

let sprite = new Image();
sprite.src = './assets/ship.jpg';
sprite.onload = function () {
    function drawPlayer() {
        ctx.clearRect(player.x, player.y, sprite.width, sprite.height);
        ctx.drawImage(sprite, player.x, player.y);
        console.log('drawPlayer working');
    }

    function main() {
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        drawPlayer();
        console.log('working');
    }

    setInterval(() => {
        main();
    }, 100)
}