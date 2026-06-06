/*
This is a file that compares the secret sequence with the user's guess.
*/
import { Digit, judgeResult } from "./types"

export function judge(secret: Digit[], guess: Digit[]): judgeResult {
    let hit: number = 0;
    let blow: number = 0;
    let length: number = secret.length;
    for (let i = 0; i < length; i++) {
        if (secret[i] === guess[i]) {
            hit++;
        } else if (secret.includes(guess[i])) {
            blow++;
        }
    }
    return new judgeResult(hit, blow);
}

function judgeAnotherImpl(secret: Digit[], guess: Digit[]): judgeResult {
    return guess.reduce<judgeResult>(
        // result is an accumulation! (like `acc` in Rust)
        (result, digit, index) => {
            // if it is a hit
            if (secret[index] === digit) {
                return new {...result, hit: result.hit + 1}
            } else if (secret.includes(digit)) {
                return new {...result, blow: result.blow + 1}
            } else {
                return result;
            }
        }, new judgeResult(0, 0)
    );
}

