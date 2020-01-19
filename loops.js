let companies = ["Tesla", "Amazon", "Google", "Microsoft"]

for(let x in companies){
    console.log(companies[x])
}

for(let companyIndex in companies){
    console.log(companyIndex)
  }


  for(let company of companies){
    console.log(company)
  }


  let companiez = ["Tesla", "Amazon", "Google", "Microsoft"]
    for(let z of companiez) {
        console.log("One day I will work in " + z)
    }


    let timer = 0;

while(timer < 10){
  console.log(timer);
  timer++;
}


  let people = ["Bob" , "John" , "Alex"]
  let age = [10 , 20 , 30 ]
  
  for(let i = people; i < people.length; i++ ) {
      for(let x = age; x <age.length; x++ ) {
          console.log(i + " is " + x + "is years old.")
      }
  }


 for( let i = 0; i < 5; i++ )
  console.log("Hellow World!")

  let companiesz = ["Tesla", "Amazon", "Google", "Microsoft"]
   for(let x of companiesz)
    console.log("One day I will work at " + x)


    let timers = 0;
      while(timers < 10) {
        console.log(timers);
        timers++;
      }



    console.log("======================================")


    let names = ["Alex" , "Bill" , "Carl"];
    let agge = [10, 20, 30]
     for(let i = 0; i < agge.length; i++) {
      console.log(names[i] + " is " + agge[i]+ " years old.")
    }
    

    let numberz = [1, 2, 3, 4, 5]
    let sum = 0 

    for(let i in numberz) {
      sum += numberz[i]
    }
    console.log(sum)

    let amount = numberz.length;
    let average = sum / amount;

    console.log("Average is " + average)


   let nooma = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    for(let i = 0; i < 10; i++) {
      if(i%2 == 1){
        console.log(i)
      }
    }

    
let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 
      689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 
      289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 
      785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 
      382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 
      659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

      let index = 0
      for(let i = 0; i<709; i++) {
        if(nums[i] == 709 ){
          index = i 
        }
        console.log(i)
      }


const namess = ["Ashley", "Donovan", "Lucas"]
const agess = [23, 47, 18]
const peoplee = []

for(let i = 0; i<agess.length; i++)
{
  const newObj = ["Name: " + namess[i] , "Age " + agess[i]]
  peoplee.push(newObj)
}
console.log(peoplee)

