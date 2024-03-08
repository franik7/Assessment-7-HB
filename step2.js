//Write a function that takes in an array of numbers. The function should return True if any two numbers in list sum to 0, and false otherwise. 

//runtime is O(n) 
//space is O(1)

function addToZero(arr){
    
    const initialValue = 0;
    let result = arr.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue,
);
    if(result === 0){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

addToZero([1,2,3,-6])


//Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//runtime is O(n) 
//space is O(n)

function hasUniqueChars(string){
    let arr = string.split("")
    let newSet = new Set(arr)
    let newArr = Array.from(newSet)
    if(arr.length === newArr.length){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

hasUniqueChars("Monday")


// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”
// Write a function to check a sentence to see if it is a pangram or not.

//runtime is O(n) 
//space is O(1)

function isPangram(string){
    let str = string.toLowerCase()
    let arr = str.split("")
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphabetArr = alphabet.split("")

    let newArr = []
    
    for(let i = 0; i<arr.length;i++){
        if(arr[i] === 'a' || arr[i] === 'b' || arr[i] === 'c' || arr[i] === 'd' ||
        arr[i] === 'e' || arr[i] === 'f' || arr[i] === 'g' || arr[i] === 'h' ||
        arr[i] === 'i' || arr[i] === 'j' || arr[i] === 'k' || arr[i] === 'l' ||
        arr[i] === 'm' || arr[i] === 'n' || arr[i] === 'o' || arr[i] === 'p' ||
        arr[i] === 'q' || arr[i] === 'r' || arr[i] === 's' || arr[i] === 't' ||
        arr[i] === 'u' || arr[i] === 'v' || arr[i] === 'w' || arr[i] === 'x' ||
        arr[i] === 'y' || arr[i] === 'z'){
            newArr.push(arr[i])
        }
    }

    let newSet = new Set(newArr)
    let newArr2 = Array.from(newSet)
    if(newArr2.length === alphabetArr.length){
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}

isPangram("The quick brown fox jumps over the lazy dog!")


//Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

//runtime is O(n) 
//space is O(1)

function findLongestWord(arr){
    let longest = arr[0]
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i].length > longest.length){
            longest = arr[i]
        }
    } console.log(longest.length)
    return longest.length
}

findLongestWord(["hi", "hello"])