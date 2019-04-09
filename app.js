var boxes = [];
var grids = [];
var turn = 0;
var prompt = document.querySelector(".users > p");

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
        turn++;
    } else {
        grids[num].textContent = "O";
        turn++;
    }

}

function winCondition(places) {
    let i = places[0];
    let j = places[1];
    let k = places[2];
    if (grids[i].textContent == grids[j].textContent == grids[k].textContent) {
        won(grids[i].textContent);
    } else {
        return false;
    }
}
// 123 456 789 147 258 369 159 357

//  else if (grids[4].textContent == grids[5].textContent == grids[6].textContent) { 
//      return "456"
// }${toWord(userChoice)} ${smallUser} and ${toWord(compChoice)} $\{smallComp} are the same. You Draw`; 

function won(xoro) {
    prompt.textContent = xoro + " WON";
    fill(0);
}

function game(num) {
    fill(num);
    let op = "";
    if (turn > 4) {
        if (winCondition("123")) {
            console.log(won);
        } else if (winCondition("456")) {
            console.log(won);
        } else if (winCondition("789")) {
            console.log(won);
        } else if (winCondition("147")) {
            console.log(won);
        } else if (winCondition("258")) {
            console.log(won);
        } else if (winCondition("369")) {
            console.log(won);
        } else if (winCondition("159")) {
            console.log(won);
        } else if (winCondition("357")) {
            console.log(won);
        }

    }

    if (turn == 9) {
        prompt.textContent = "DRAW";
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
console.log(1 + 2);
console.log("1" + "2");