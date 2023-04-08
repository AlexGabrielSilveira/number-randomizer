const num = document.getElementById("num")
const result = document.getElementById("resultH1")

num.addEventListener('focusout', e => {
    let numMath = e.target.value
    
    numSave = []
    
    for (let i = 0; i < numMath; i++) {
        if (numMath > 6) {
            return alert('apenas números de 6 para baixo !')
        }
        const resultMath = Math.floor(Math.random() * 100) + 1 
        console.log(resultMath) 
        numSave.push(resultMath)
        
    }
    result.innerHTML = numSave.join(' / ')
    
})

