const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=258dd174dbfb9a14c99111690c335b83&query=37.8267,-122.4233'

request({ url: url}, (error, resposnse)=>{
  const data = JSON.parse(resposnse.body)
  console.log(data.current)
})