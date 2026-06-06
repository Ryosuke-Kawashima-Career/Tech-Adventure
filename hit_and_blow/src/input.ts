import * as readline from "readline";

export function createInterface(): readline.Interface {
    return readline.createInterface(
        {
            input: process.stdin,
            output: process.stdout,
            terminal: true
        }
    );
}

export function ask(rl: readline.Interface, question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer.trim());
        })
    });
}
