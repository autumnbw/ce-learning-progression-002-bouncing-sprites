const MAXFLASH : number = 10
for (let i = 0; i < MAXFLASH; i ++) {
  if (i % 2 == 1) {       
    basic.showIcon(IconNames.Heart)  
    basic.clearScreen()
} else {
    basic.showIcon(IconNames.Ghost)
    basic.pause(100)
    basic.clearScreen()
}}
