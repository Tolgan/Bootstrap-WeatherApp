
import React from "react"


class Memegenerator extends React.Component{constructor(){super()
this.state={toptext:"",bottomtext:"",img:"https://931d59c3894c2d8e34ed-eb103888d739062e5214c7f10fa51e4c.ssl.cf2.rackcdn.com/product-original-458231-119394-1425197874-fedb151242af8b24c02526adadc8ee63.jpg"   
,allmeme:[]} 
  this.handleChange=this.handleChange.bind(this)
  this.handleSubmit=this.handleSubmit.bind(this)  }
componentDidMount(){fetch ("https://api.imgflip.com/get_memes")    
.then(response=>response.json())
.then(response =>{const {memes}=response.data
this.setState({allmeme:memes})})}      




handleChange(event){this.setState({[event.target.name]:event.target.value      })}
 



handleSubmit(event){event.preventDefault() 
    const rand=Math.floor(Math.random()*this.state.allmeme.length)       
    this.setState({img:this.state.allmeme[rand].url })    }  

render(){return(
<div>
<form className="meme-gen" onSubmit={this.handleSubmit}>

<input type="text" name="toptext" placeholder="Toptext" onChange={this.handleChange} value={this.state.toptext}/>
<input type="text" name="bottomtext" placeholder="Bottomtext" onChange={this.handleChange} value={this.state.bottomtext}/>

<button>Gen</button>
</form>
<div><img src={this.state.img} alt="resim"/>
<h2>{this.state.toptext}</h2>
<h2>{this.state.bottomtext}</h2>
</div>
</div>
)}}
 



                      



export default Memegenerator