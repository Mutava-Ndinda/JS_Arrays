//1.find the last element of the arrays
let arr1 = [3,7,34,90,12];
console.log("last item",arr1.slice(-1));

let arr2 = [true,"green","where",12,56];
console.log("last item",arr2.slice(-1));

//2.join
let pets = ["Cow","Bird","Snake","Dog"];
let stringmyPets= pets.join();
console.log({stringmyPets})

//3.sort the array
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let itemsvar = arr3.toSorted()
console.log({itemsvar})

//4.remove duplicates
let arr = ["boy","man","girl","school","girl","woman"]


//5.search the word "food"
let arr5 = ["the","way","x",4];
if(arr5.includes("food")){
    console.log({aar5})
}
else{
    console.log("the search word was not found")
}

//6.sort the string
let word = "renniw";


//7.insert tomato
let fruits = ["Grapes","Kiwi","Apples","Pineapple","Banana","Watermelon","Blueberry","Plum","Dates","Peach"];
fruits[5]="Tomato";
console.log({fruits});
