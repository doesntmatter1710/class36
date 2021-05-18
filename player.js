class Player {
    constructor() {

    }

    getCount() {
        var gref=database.ref('playerCount')
        gref.on("value",function(data) {
            playerCount=data.val()
        })
    }

    updateCount(count) {
        database.ref('/').update({
            'playerCount': count
        })
    }

    update(name) {
        var p="player" + playerCount
        database.ref(p).set({
            'name': name
        })

    }
}