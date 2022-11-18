//ZAD4_2

//Wyświetlić zawartości tablicy przy zastosowaniu rekurencji (także asynchronicznie na 5).

let array:string[] = new Array("Ala","ma","kota","i","ten","kot","jest","rudy", ".")

const recursivePrint = (array:string[]) => {
    if(array.length > 0){
        console.log(array.shift())
        recursivePrint(array)   
    }
} 

const recursivePrintAsync = async(array:string[]) =>{
    if(array.length > 0){
        await console.log(array.shift())
        await recursivePrint(array)   
    }
}
recursivePrint(array)
recursivePrintAsync(array)