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
