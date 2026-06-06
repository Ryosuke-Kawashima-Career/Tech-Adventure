# Hit and Blow Application Architecture

## Objective

- Get a hands-on experience of development by Node JS with TypeScript.
- Make a hit and blow game
- Learn basic TypeScript's syntax and paradigm

## Game Flow

```mermaid
flowchart TD
    A([start]) --> B[execution]
    B --> C[closing]
    C --> D{if the user wants another session}
    D -- Go Back --> A
    D -- Terminate --> E([end])
```

## System Architecture

```mermaid
flowchart TD
    A([user]) --> B[entry point \n src/index.ts]
    B --> C[data input \n src/input.ts]
    B --> D[generate secret \n src/generateSecret.ts]
    B --> E[types definition \n src/types.ts]
    C --> F[Game Organization \n src/game.ts]
    F --> G([end])
    D --> F
```
