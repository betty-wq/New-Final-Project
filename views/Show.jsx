const React = require('react')
const Layout = require('./Layout.jsx')

class Show extends React.Component {
    render() {
        const {car} = this.props;
        console.log(car)
        return(
             <Layout>
                 <div>
                 <a href="/cars/display">Return To Display</a>
                   <h1>{car.name}</h1>
                   <img src={car.img}/>
                   <img src={car.img2}></img>
                   <p>Price: $ {car.price}</p>
                   <ul>
                       <li>MPG: {car.mpg}</li>
                       <li>Feul Type: {car.fuel_type}</li>
                       <li>Tansmission: {car.transmission}</li>
                       <li>Features: {car.features}</li>
                   </ul>
                   <button><a href="https://www.paypal.com/signin?returnUri=https%3A%2F%2Fwww.paypal.com%2Fpaypalme&state=%2Fmy%2Fprofile%3Flocale.x%3Den_US%26country.x%3DUS">Buy</a></button>
                   </div>
             </Layout>
        )
    }
}

module.exports = Show;