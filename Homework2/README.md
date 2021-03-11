## Question 1
![plot](/Homework2/Q1.jpg?raw=true)
## Question 2
![plot](/Homework2/Q2.jpg?raw=true)
## Question 3
![plot](/Homework2/Q3.jpg?raw=true)
## Question 4
![plot](/Homework2/Q4.jpg?raw=true)
## Question 5
![plot](/Homework2/Q5.jpg?raw=true)
## Question 6
![plot](/Homework2/Q6.jpg?raw=true)
## Question 7a
```js
export class Program {
    constructor(instructions) {
        this.instructions = instructions
    }
}
 
export class SimpleInstruction {
    constructor(symbol) {
        this.symbol = symbol
    }
}
 
export class LoopInstruction {
    constructor(instructions) {
        this.instructions = instructions
    }
}
```
## Question 7b

```js

const astBuilder = Brainfuck.createSemantics.addOperation("ast", {
    Program(instructions) {
        return new ast.Program(instructions.ast())
    },
    SimpleInstruction(_symbol) {
        return new ast.SimpleInstruction(_symbol.ast())
    },
    LoopInstruction(_left, instructions, _right) {
        return new ast.LoopInstruction(instructions.ast())
    }
})
```
