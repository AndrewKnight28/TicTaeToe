var boxes = [];
var grids = [];
var turn = 0;
var prompt = document.querySelector(".users > p");
var xlong = [];
var olong = [];
var winner = " ";

for (let i = 1; i < 10; i++) {
    boxes[i] = document.querySelector(`.box-${i}`);
    grids[i] = document.querySelector(`.box-${i} p`);
}

function fill(num) {
    if (num == 0) {
        for (let l = 1; l < 10; l++) {
            grids[l].textContent = " ";

        }
    } else if (turn % 2 == 0) {
        grids[num].textContent = "X";
        xlong.push(num);
        turn++;
        prompt.textContent = " O TURN ";

    } else {
        grids[num].textContent = "O";
        olong.push(num);
        turn++;
        prompt.textContent = " X TURN ";

    }

}

function check(i, j, k) {
    let cx = 0;
    let co = 0;
    for (n of xlong) {
        if (n == i) {
            cx++;
        }
        if (n == j) {
            cx++;
        }
        if (n == k) {
            cx++
        }
    }
    //maybe do a function insted of repeat same code
    for (n of olong) {
        if (n == i) {
            co++;
        }
        if (n == j) {
            co++;
        }
        if (n == k) {
            co++
        }
    }

    if (cx == 3) {
        winner = "X";
    } else if (co == 3) {
        winner = "O";

    }
}
// winning conditions 123 456 789 147 258 369 159 357

function won(xoro) {
    prompt.textContent = xoro + " WON";

}

function game(num) {
    fill(num);

    if (turn > 4) {
        check(1, 2, 3);
        check(4, 5, 6);
        check(7, 8, 9);
        check(1, 4, 7);
        check(2, 5, 8);
        check(3, 6, 9);
        check(1, 5, 9);
        check(3, 5, 7);
    }

    if (winner != " ") {
        console.log(winner);
        won(winner);
        setTimeout(() => fill(0), 1000);
        setTimeout(() => location.reload(), 1000);
    }

    if (turn == 9) {
        prompt.textContent = "DRAW"; //must fix now inning ins last turn
        setTimeout(() => location.reload(), 1000);
    }
}

function main() {
    for (let j = 1; j < 10; j++) {
        boxes[j].addEventListener('click', () => game(j), {
            once: true
        });
    }

}

main();