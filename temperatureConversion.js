//dd1 dd2version
function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5/9)
  return celsius
  }

function weatherInfo(temperature) {
  var c = convertToCelsius(temperature)
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
    }




// jacob version
const weatherInfo = temp => {
  const c = (temp - 32) * (5 / 9);
  return `${c} is ${c > 0 ? 'above ' : ''}freezing temperature`
}

//dd2version
convertToCelsius = (t) => { let cel = (t - 32) * (5/9) return cel}

weatherInfo = (t) => {
  let c = convertToCelsius(t); return (c < 0) ? c + " is freezing temperature" : c + " is above freezing temperature"
}
