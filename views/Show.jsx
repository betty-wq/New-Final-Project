const React = require('react')
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        const {car} = this.props;
        console.log(car)
        return(
             <Layout>
                 <div>
                 <ul class="navs">
                <li class="nav"><a href="/cars">HOME</a></li>
               <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
                {/* <li class="nav"><a href="./sessions/new">SIGN IN</a></li> */}
               <li class="nav">< a href="/cars/new">ADD A NEW CAR</a></li>
               <li class="nav"><a href="/cars/display">GO BACK</a></li>
               </ul>
               <div class="showbox">
                   <h1 class="carname">{car.name}</h1>
                   <img src={car.img}/>
                   <img src={car.img2}></img>
                   <p>Price: $ {car.price}</p>
                   <ul>
                       <li>MPG: {car.mpg}</li>
                       <li>Feul Type: {car.fuel_type}</li>
                       <li>Tansmission: {car.transmission}</li>
                       <li>Features: {car.features}</li>
                   </ul>
                   <button class="buy" ><a class="buybutton" href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fpaypalme&state=%2Fmy%2Fprofile%3Flocale.x%3Den_US%26country.x%3DUS">Buy</a></button>
                   </div>
                   </div>
             </Layout>
        )
    }
}

module.exports = Show;