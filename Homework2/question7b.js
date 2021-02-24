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
