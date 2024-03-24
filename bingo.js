import fs from 'fs';

const data = fs.readFileSync('data.txt', { encoding: 'utf8' });
const sections = data.split('---\n').map(section => section.trim());
const numbers = sections[0].split(',').map(Number);
const boards = sections.slice(1).map(section => 
    section.split('\n')
);

// I against squid PART 1

const bingo = (numbers, board) => {
    const rows = board.map(row => row.split(' ').map(Number));
    const columns = [[], [], [], [], []];

    rows.forEach(row => {
        row.forEach((num, index) => {
            columns[index].push(num);
        });
    });

    for (let i = 0; i < 5; i++) {
        if (rows[i].every(num => numbers.includes(num))) {
            return true; // Row bingo
        }

        if (columns[i].every(num => numbers.includes(num))) {
            return true; // Column bingo
        }
    }

    return false;
};

console.log(bingo(numbers, boards[0]));

// I against squid PART 2

const guaranteedWinBoard = (numbers, boards) => {
    const winningIndex = boards.findIndex(board => bingo(numbers, board));

    return winningIndex > -1 
           ? `To continue my journey past squid I could pick a board at index ${winningIndex + 1}.`
           : 'No luck, squid happened to be stronger this time.';
};

console.log(guaranteedWinBoard(numbers, boards))

export { bingo, guaranteedWinBoard };
