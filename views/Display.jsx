const React = require('react')
const Layout = require('./Layout')

class Display extends React.Component {
    render() {
        const { cars } = this.props;
        console.log(cars)
        return(
             <Layout>
                  <div>
                  <ul class="navs">
                <li class="nav"><a href="/cars">HOME</a></li>
               <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
                {/* <li class="nav"><a href="./sessions/new">SIGN IN</a></li> */}
               <li class="nav">< a href="/cars/new">ADD A NEW CAR</a></li>
               </ul>
                      <h1 class="header">Our latest model cars are listed below. If you would like to see details about the cars, click on the image of the vehicle.</h1>
                   {cars.map((car, index) =>{
                       return(
                           <div class="carlist">
               <h1 class="carname">{car.name}</h1>
               <a class="car" href={`/cars/${car._id}`}><img class="cars" src={car.img}></img></a>
               <form class="buttons" action={`/cars/${car._id}?_method=DELETE`} method="post">
                   <input class="button" type="submit" value="delete"/>
               </form>
               <form class="buttons" action={`/cars/edit/${car._id}`} method="GET">
                  <input class="button" type="submit" value="edit"/>
               </form>
               </div>
                )
            })}
               </div>
             </Layout>
        )
    }
}
module.exports = Display