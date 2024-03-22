// I against squid PART 1

function bingo(numbers, board) {
    const rows = board.map(row => row.split(' ').map(Number));
    const columns = [[], [], [], [], []];  

    // fill columns
    rows.forEach(row => {
        row.forEach((num, index) => {
            columns[index].push(num);
        });
    });

    // iterate arrays and columns to look for bingo
    for (let i = 0; i < 5; i++) {
        // every method
        if (rows[i].every(num => numbers.includes(num))) {
            return true; // rows bingo, squid lost
        }

        if (columns[i].every(num => numbers.includes(num))) {
            return true; // columns bingo, I win
        }
    }

    return false; // squid wins
};

// tessssst
const numbers = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
const board = [
    '22 13 17 11 0',
    '8 2 23 4 24',
    '21 9 14 16 7',
    '6 10 3 18 5',
    '1 12 20 15 19'
];

console.log(bingo(numbers, board));

// I against squid PART 2

function guaranteedWinBoard(numbers, boards) {
    for (let i = 0; i < boards.length; i++) {
        if (bingo(numbers, boards[i])) {
            return ('winning board guaranteed');
        };
    };

    return ('no guaranteed win');
}

const numbers2 = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
const boards = [
    [
        '22 13 17 11 0',
        '8 2 23 4 24',
        '21 9 14 16 7',
        '6 10 3 18 5',
        '1 12 20 15 19'
    ],
    [
        '3 15 0 2 22',
        '9 18 13 17 5',
        '19 8 7 25 23',
        '20 11 10 24 4',
        '14 21 16 12 6'
    ],
    [   
        '14 21 17 24  4',
        '10 16 15  9 19',
        '18  8 23 26 20',
        '22 11 13  6  5',
        '2 0 12 3 7'
    ]
];

console.log(guaranteedWinBoard(numbers2, boards))