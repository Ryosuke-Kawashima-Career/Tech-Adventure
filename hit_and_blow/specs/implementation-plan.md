# Implementation Plan — Hit and Blow

Based on `specs/design.md`. Plan is staged so each step introduces a small set of TypeScript concepts, building toward the full game flow (start → execution → closing → replay or end).

## Stage 1 — Project & types skeleton
- Confirm `tsc` build works (`npm run build`); fix `package.json` (compilerOptions currently misplaced — must live in `tsconfig.json`).
- Create `tsconfig.json` with `rootDir: src`, `outDir: dist`, `strict: true`.
- In `src/`, define core types/interfaces: `type Digit = number`, `interface JudgeResult { hit: number; blow: number }`.
- **TS concepts**: types vs. interfaces, `strict` mode, modules (`import`/`export`).

## Stage 2 — Secret number generator
- `src/generateSecret.ts`: function that returns an array of N unique digits (e.g., 3 digits, 0–9).
- **TS concepts**: functions with typed return values, arrays, `Set`, arrow functions.

## Stage 3 — User input (execution loop, part 1)
- `src/input.ts`: wrap Node's `readline` to prompt the user and return a `Promise<string>`.
- Validate input: correct length, digits only, no duplicates — return a typed result (success/error union).
- **TS concepts**: `async`/`await`, `Promise<T>`, union types, type guards.

## Stage 4 — Judge logic
- `src/judge.ts`: function `judge(secret: Digit[], guess: Digit[]): JudgeResult` comparing positions (hit) and values (blow).
- **TS concepts**: pure functions, generics (optional), readonly arrays, enums or literal types for game state.

## Stage 5 — Game loop (execution)
- `src/game.ts`: orchestrate generate → loop(prompt → validate → judge → display) until all hits or max attempts.
- Track attempt count; print hit/blow each round.
- **TS concepts**: classes vs. functions for state, `while`/`for` loops, control flow narrowing.

## Stage 6 — Closing & replay
- After the game ends, show result (win/lose, attempt count).
- Ask "play again?" — loop back to Stage 5 or exit, matching the design.md flowchart (`D -- Go Back --> A` / `D -- Terminate --> E`).
- **TS concepts**: recursion or loop-based state machines, `process.exit`.

## Stage 7 — Entry point & polish
- `src/index.ts`: wire everything together; handle `readline` interface lifecycle (open/close).
- Add basic error handling (invalid input shouldn't crash the loop).
- Optional: extract constants (digit count, range) into a config object/type.
- **TS concepts**: module composition, `interface` for config, top-level `async main()`.

## Stage 8 — Verification
- Manual playtest: win path, lose path, replay path, invalid-input path.
- Optional: add a minimal test script for `judge()` (pure function — easiest to test).

## Suggested order of file creation
1. `tsconfig.json`
2. `src/types.ts`
3. `src/generateSecret.ts`
4. `src/judge.ts`
5. `src/input.ts`
6. `src/game.ts`
7. `src/index.ts`
