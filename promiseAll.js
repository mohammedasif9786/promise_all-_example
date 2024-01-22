let promiseOne = new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve(50)
    },2000)
})

let promiseTwo = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve(80)
    },2000)

})

Promise.all([promiseOne,promiseTwo]).then((input)=>{

    let finalResult = input.reduce((input1,input2)=>{
        return input1 + input2
    })
    console.log(`promises resolved values ${input} `)
    console.log(`resolved values after using reduce method is ${finalResult}`)
})