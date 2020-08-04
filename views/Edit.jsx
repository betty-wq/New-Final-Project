const React = require('react')
const Layout = require('./Layout.jsx')

class Edit extends React.Component{
    render(){
        const { car } = this.props
        return(
            <Layout>
                <div>
                    <ul class="navs">
                        <li class="nav"><a href="/cars">HOME</a></li>
                        <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
                        <li class="nav">< a href="/cars/new">ADD A NEW CAR</a></li>
                        <li class="nav"><a href="/cars/display">GO BACK</a></li>
                    </ul>
                    <h1>Edit</h1>
                    <form class="editform" action={`/cars/edit/${car._id}?_method=put`} method="POST">
                         Name:<input class="editinput" type="text" name="name" value={car.name}/><br/>
                         Price:<input class="editinput" type="number" name="price" min="0" value={car.price}/><br/>
                         Image:<input class="editinput" type="text" name="img" value={car.img}/><br/>
                         MPG:<input class="editinput" type="text" name="mpg" value={car.mpg}/><br/>
                         Fuel Type:<input class="editinput" type="text" name="fuel type" value={car.fuel_type}/><br/>
                         Transmission:<input class="editinput" type="text" name="transmission" value={car.transmission}/><br/>
                         Features:<input class="editinput" type="text" name="features" value={car.features}/><br/>
                         <input type="submit" value="Edit"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit