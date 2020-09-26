const MAX : number = 20
for (let i = 0; i < MAX; i++) { 
    if (i % 2 == 1)   { 
        basic.showNumber(-i)
        basic.pause(50)
        basic.clearScreen()
    } else {
        basic.showNumber(i)
        basic.pause(50)
        basic.clearScreen()
}}
