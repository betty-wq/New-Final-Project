const React = require('react')
const Layout = require('./Layout.jsx')

class New extends React.Component {
    render(){
        return(
           <Layout>
                 <div class="new">
                     <ul class="navs">
                         <li class="nav"><a href="/cars">HOME</a></li>
                         <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
                     </ul>
                 <div>
                     <h1>Build a new car</h1>
                     <p>"I couldn't find the car of my dreams, so I built it myself." -Ferdinand Porche</p>
                 </div>
                     <form class="newform" action="/cars" method="POST">
                         <input class="newinput" type="text" name="name" placeholder="name"/><br/>
                         <input class="newinput" type="text" name="img" placeholder="image"/><br/>
                         <input class="newinput" type="text" name="price" placeholder="price"/><br/>
                         <input class="newinput" type="string" name="mpg" placeholder="mpg"/><br/>
                         <input class="newinput" type="text" name="fuel_type" placeholder="fuel type"/><br/>
                         <input class="newinput" type="text" name="transmission" placeholder="transmission"/><br/>
                         <input class="newinput" type="text" name="features" placeholder="features"/><br/>
                         <input type="submit" value="Add"/> 
                     </form>
                   
                 </div>
           </Layout>
        )

    }
}

module.exports = New;