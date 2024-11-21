const PromiseOne = new promise(resolve, reject){
    //Do an async task
    //DB calls, crytography,network
    
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

    promiseOne.then(function(){
        console.log("Promise consumed")
    })
