import React from "react"


class Havadurumu extends React.Component{
state={temperature:"",humidity:"",description:"",city:"",country:"",error:""  }

  getWeather=async(e)=>{e.preventDefault();
    const city=e.target.city.value;
    const country=e.target.country.value;
    const APPkey="b6907d289e10d714a6e88b30761fae22"
const calls= await fetch(`https://cors-anywhere.herokuapp.com/openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APPkey}&units=metric`)            
const data= await calls.json()  ; console.log(data)
 if( city && country) {this.setState({temperature:data.main.temp,humidity:data.main.humidity,description:data.weather[0].description,
 city:data.name,country:data.sys.country })}
 else{this.setState({temperature:"",humidity:"",description:"",city:"",country:"",
 error:"Lütfen Doğru giriniz."}) }}



render(){return(  <form onSubmit={this.getWeather}>
<div class="container-fluid">
    <div class="row ">
    <div className="col reactclass1  text-center ">
    <div class="titles mx-auto m-5 p-5">
<h2 style={{color:"darkred"}}>Weather Finder</h2>
<input type="text" size="6" class="textstyle" placeholder="CityName" name="city"   />
<input type="text" size="6" class="textstyle" placeholder="CountryName" name="country" /><br/>
<button class="bg-primary btn btn-outline-dark">GetWeatHer</button>   
</div>
    </div>
    <div className="col weather_bg p-5">
   <div class="content mx-auto py-5 text-center">
    {this.state.city &&  this.state.country && <p class="sometexting">City: <span class="somevaluing">{this.state.city}</span> Country:<span class="somevaluing">{this.state.country }</span></p>}<hr/>
    {this.state.temperature && this.state.temperature &&  <p class="sometexting">Temperature:<span class="somevaluing"> {this.state.temperature}  </span> </p> }
    {this.state.city &&  this.state.country && <p class="sometexting">Humidity:<span class="somevaluing">{this.state.humidity}</span> </p> }
    {this.state.city &&  this.state.country &&  <p class="sometexting">Description:<span class="somevaluing">{this.state.description}</span></p>}
    {this.state.error && <p class="sometexting">{this.state.error} </p>}
</div>
    </div>
     </div>
</div>  
</form> )}}









export default Havadurumu 