var numArray = ["Diego", "Alisson", "Caique"]
numArray.push("Antonio")
numArray.push("Henrico")
numArray.push("Paulo de Paula")
for(var i in numArray){
    console.log(`O ${Number(i)+Number(1)} aluno se chama ${numArray[i]}`)
}
