// Code your solution in this file!

const scuberHeadquaters = 42

   function distanceFromHqInBlocks(number){
   let distanceFromHqInBlocks = Math.abs((number - scuberHeadquaters));
   
return distanceFromHqInBlocks;
   }

   function distanceFromHqInFeet(dis){
   let disinfeet= distanceFromHqInBlocks(dis)*264;
   // let totaldisinfeet = disinfeet*264
   return disinfeet
 
   }
   function distanceTravelledInFeet(start, finish){
      let distanceInFeet= Math.abs(finish - start)*264;
      return distanceInFeet

   }

   function calculatesFarePrice(start, destination){
let distanceInFeet= distanceTravelledInFeet(start, destination)
let fare
if (distanceInFeet <400){
   console.log('gives customers a free sample')
   fare = 0
}
else if(distanceInFeet>400 && distanceInFeet<2000){
    fare= ((distanceInFeet - 400)*2)/100
   
}
else if(distanceInFeet>2000 && distanceInFeet<=2500){
   fare = 25
}
else if(distanceInFeet>2500){
   // console.log('cannot travel that far')
   return 'cannot travel that far'
}
return fare

   }