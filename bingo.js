import fs from 'fs';

const data = fs.readFileSync('data.txt', { encoding: 'utf8' });
const sections = data.split('---\n').map(section => section.trim());
const numbers = sections[0].split(',').map(Number);
const boards = sections.slice(1).map(section => 
    section.split('\n')
);

// I against squid PART 1

function bingo(numbers, board) {
    const rows = board.map(row => 
        row.split(' ').map(Number)
    ); 
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
            return ('Bingo! This card beats squid!'); // rows bingo, squid lose
        }

        if (columns[i].every(num => numbers.includes(num))) {
            return ('Bingo! Columns guranteed you moving pass squid'); // columns bingo, I win
        }
    }

    return ('No bingo. Squid was too strong'); // squid wins
};

console.log(bingo(numbers, boards[0]));

// I against squid PART 2

function guaranteedWinBoard(numbers, boards) {
    for (let i = 0; i < boards.length; i++) {
        if (bingo(numbers, boards[i])) {
            return ('To continue my journey passed squid I could pick a board at index ' + (i + 1));
        };
    };

    return ('No luck, squid happened to be stronger this time.');
}

console.log(guaranteedWinBoard(numbers, boards))