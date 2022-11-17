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
  
