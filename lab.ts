interface Mountain {
  name: string;
  height: number;
}

const mountains: Mountain[] = [
  { name: "Kiliminjaro", height: 19341 },

  {
    name: "Everest",
    height: 29029,
  },

  {
      name: "Denali",
      height: 20310,
  }
];

//Declare a function called findNameOfTallestMountain. It takes one parameter, an
// array of Mountain objects. It returns a string, the name of the tallest mountain in the
// given array. If the array argument is empty, return an empty string ("").
// findName
function findNameOfTallestMountain(mtns: Mountain[]) : string {
    if (mtns === null){
        return "";
    } else {
        let height = 0;
        let tallest="";
        mtns.forEach(element => {
            if (element.height > height){
                height=element.height;
                tallest=element.name;
            }
        });
        return tallest;
    }
    
}

const tallestMtn = findNameOfTallestMountain(mountains);
console.log(tallestMtn);