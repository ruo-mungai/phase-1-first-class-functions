function spy(){

}

function receivesAFunction(spy){
  spy()
}

receivesAFunction(function () {return "john"})

function returnsANamedFunction(){
    return (function fn() {"john"})
}

function returnsAnAnonymousFunction(){
    return (function () {"john"})
}
