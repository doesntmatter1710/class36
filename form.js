class Form{
    constructor() {

    }
    display() {
        var title=createElement('h2')
        title.html("car racing game")
        title.position(150,20)
        var input=createInput("name")
        input.position(130,150)
        var button=createButton('play')
        button.position(250,100)
        button.mousePressed(
            function() {
                input.hide()
                button.hide()
                var name=input.value()
                playerCount=playerCount+1
                player.update(name)
                player.updateCount(playerCount)
                var greet=createElement('h4')
                greet.html("hello  " +name)
                greet.position(100,100)
            }
        )
    }
}