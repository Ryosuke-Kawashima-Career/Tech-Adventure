function gameManagement(): boolean {
    const gameInterface = createInterface();
    console.log("Starting the game");
    let is_matched: boolean = false;
    let attemptCount = 0;
    while (!is_matched && attemptCount < MAX_ATTEMPT) {
        const usersGuess = await ask(gameInterface, "Enter your guess!");
        const guessedDigits = toDigits(usersGuess);
        if (guessedDigits === null) {
            console.log(`Please Enter ${DIGIT_COUNT} digits (0~9)...`);
        }
        const judgeResult: JudgeResult = judge(guessedDigits);
        if (judgeResult.hit === 3) {
            console.log("You win!");
            is_matched = true;
        } else {
            console.log(`Hit: ${judgeResult.hit} Blow: ${judgeResult.blow}\n`);
            attemptCount++;
            console.log(`Remaining Attempts are ${10-attemptCount}`);
        }
    }
    return is_matched;
}