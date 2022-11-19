//ZAD9
//Wykorzystaj await/promise do zaimplementowania funkcji asynchronicznej

const sleep = (ms:number) => new Promise(r => setTimeout(r, ms));

const asyncFunction = async() => {
    await sleep(2000)
    console.log(`Jakis tekst`)
    await sleep(2000)
    console.log(`Jakis tekst`)
    await sleep(2000)
    console.log(`Jakis tekst`)
}
asyncFunction()