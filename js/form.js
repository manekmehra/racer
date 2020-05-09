class Form {
    constructor(){
    
    }
    display(){
        var input = createInput("name")
        var Button = createButton("submit")
        var greeting = createElement('h3')

        input.position(600,160)
        Button.position(600,200)
        Button.mousePressed(function(){
            input.hide()
            Button.hide()
            var name=input.value()
            playercount = playercount+1
            player.update(name)
            player.updateCount(playercount)
            greeting.html("Hello "+name)
            greeting.position(600,160)
        })        
    }
}
