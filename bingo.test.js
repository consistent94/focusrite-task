import { checkBingo, guaranteedWinBoard } from './bingo.js';

describe('Bingo Game Tests', () => {
    describe('bingo function', () => {
        test('should identify a winning row', () => {
            const numbers = [1, 2, 3, 4, 5];
            const board = [
                '1 2 3 4 5',
                '6 7 8 9 10',
                '11 12 13 14 15',
                '16 17 18 19 20',
                '21 22 23 24 25'
            ];
            expect(checkBingo(numbers, board)).toBe(true);
        });

        test('should identify a winning column', () => {
            const numbers = [1, 6, 11, 16, 21];
            const board = [
                '1 2 3 4 5',
                '6 7 8 9 10',
                '11 12 13 14 15',
                '16 17 18 19 20',
                '21 22 23 24 25'
            ];
            expect(checkBingo(numbers, board)).toBe(true);
        });

        test('should return no bingo if none found', () => {
            const numbers = [1, 2, 3, 7, 8];
            const board = [
                '1 2 3 4 5',
                '6 7 8 9 10',
                '11 12 13 14 15',
                '16 17 18 19 20',
                '21 22 23 24 25'
            ];
            expect(checkBingo(numbers, board)).toBe(false);
        });
    });

    describe('guaranteedWinBoard function', () => {
        test('should find at least one winning board', () => {
            const numbers = [1, 2, 3, 4, 5];
            const boards = [
                [
                    '6 7 8 9 10',
                    '11 12 13 14 15',
                    '16 17 18 19 20',
                    '21 22 23 24 25',
                    '26 27 28 29 30'
                ],
                [
                    '1 2 3 4 5',
                    '6 7 8 9 10',
                    '11 12 13 14 15',
                    '16 17 18 19 20',
                    '21 22 23 24 25'
                ]
            ];
            expect(guaranteedWinBoard(numbers, boards)).toBeTruthy();
        });

        test('should return no luck if no winning board found', () => {
            const numbers = [26, 27, 28, 29, 30];
            const boards = [
                [
                    '1 2 3 4 5',
                    '6 7 8 9 10',
                    '11 12 13 14 15',
                    '16 17 18 19 20',
                    '21 22 23 24 25'
                ],
                [
                    '31 32 33 34 35',
                    '36 37 38 39 40',
                    '41 42 43 44 45',
                    '46 47 48 49 50',
                    '51 52 53 54 55'
                ]
            ];
            expect(guaranteedWinBoard(numbers, boards)).toBe('No luck, the squid was stronger this time.');
        });
    });
});
