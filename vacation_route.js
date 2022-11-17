
// const startPoint = "Kiev";
// const source = ["Paris", "Zurich", "Prague", "Barcelona", "Kiev", "Skopje", "Amsterdam", "Berlin", "Berlin"];
// const destination = ["Skopje", "Amsterdam", "Zurich", "Berlin", "Prague", "Paris", "Barcelona", "Kiev", "Amsterdam"];

// // source.map((index) => {
// //     console.log("Source", source);
// // })

// let idx = 0;
// let nextSource = startPoint;
// for (idx = 0; idx < source.length; idx++) {
//     if (nextSource === source[idx]) {
//         nextSource = destination[idx];
//         console.log(source[idx] +"-"+ destination[idx]);
//         idx = 0;
//         if (nextSource === startPoint) {
//            return
//         }
//     }
// }







let visitedCities = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Barlin', 'Barcelona'];
let tickets = [ 'Kiev-Prague', 'Prague-Zurich', 'Zurich-Amsterdam', 'Amsterdam-Barcelona', 'Barcelona-Barlin', 'Barlin-Kiev'];

let startingCity = 'Kiev';

  tickets.map((_item) => {
    if(_item.indexOf(startingCity) === 0 && visitedCities.includes(startingCity)){
      console.log(_item)
      let temp = startingCity+'-'
      let tes  = _item.replace(temp, '')
      startingCity = tes;
    }
  })
  
