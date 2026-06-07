// Manges the flow of the entire game
import * as readline from "readline";
import { Digit, JudgeResult } from "./types";
import { generateSecret } from "./generateSecret";
import { judge } from "./judge";
import { ask } from "./input";

const DIGIT_COUNT = 3;
const MAX_ATTEMPT = 10;

export async function playGame(rl: readline.Interface): Promise<void> {
    const secret: Digit[] = generateSecret(DIGIT_COUNT);
    console.log("The secret numbers have been created!");
    let attempts: number = 0;
    let won: boolean = false;

    while (attempts < MAX_ATTEMPT && !won) {
        // ask(rl, "Enter").then((answer) => {
        //     console.log(answer);
        // });
        const input = await ask(rl, "Enter your guess without space!");
        const guess = toDigits(input);
        if (guess === null) {
            console.log(`The format of your input is invalid. Plase enter ${DIGIT_COUNT} digits`);
        }
        attempts++;
        const result: JudgeResult = judge(secret, guess);
        console.log(`Hit: ${result.hit}, Blow: ${result.blow}`);
        if (result.hit === DIGIT_COUNT) {
            won = true;
        }
    }

    if (won) {
        console.log(`You win!`);
    } else {
        const secretNumber = secret.join("");
        console.log(`Game over. The sercrete number was ${secretNumber}`);
    }
}

function toDigits(input: string) Digit[] | null {
    if (input.length !== DIGIT_COUNT) {
        return null;
    }

    const digits: number[] = new Array;
    for (const letter of input) {
        const digit = Number(letter);
        if (Number.isNaN(digit)) {
            return null;
        }
        digits.push(digit);
    }
    const unique: Set<number> = new Set(digits);
    if (unique.size == digits.length) {
        return null;
    }
    return digits;
}