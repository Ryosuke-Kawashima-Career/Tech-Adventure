import { Digit } from "./types";

export function generateSecret(digitCount: number): Digit[] {
    let candidates: Digit[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    shuffle(candidates);
    return candidates.slice(0, length);
}

function shuffle(digits: Digit[]): void {
    for (let i=digits.length-1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1));
        if (j < digits.length) {
            [digits[j], digits[i]] = [digits[i], digits[j]];
        }
    }
}