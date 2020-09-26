let i : boolean = true

    basic.forever(function () {
         for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++){
            if (i) 
                led.plot(x, y)
         else 
                led.unplot(x, y)
            basic.pause(100)
        } i = !i
    } 
    
})
