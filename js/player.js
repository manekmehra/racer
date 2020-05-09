class Player {
    constructor (){
     
    }
    getCount(){
        var pref = database.ref('playercount')
        pref.on("value",function(data){
            playercount = data.val()
        })
    }

    updateCount(count){
        database.ref('/').update({
            playercount:count
        })
    }
    update(name){
   var pi = "player"+playercount
   database.ref(pi).set({
       name:name
   })
    }
    }