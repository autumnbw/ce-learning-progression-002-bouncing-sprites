const MAXFLASH : number = 10
for (let i = 0; i < MAXFLASH; i ++) {
  if (i % 2 == 1) {       
    basic.showIcon(IconNames.Giraffe)  
    basic.clearScreen()
} else {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
}}
