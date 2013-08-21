window.hello = function (name) {
  return 'No, I will NOT say Hello ' + (capitalize(name) || 'stranger')
}

function capitalize (val) {
  return val ? val[0].toUpperCase() + val.substring(1) : val
}