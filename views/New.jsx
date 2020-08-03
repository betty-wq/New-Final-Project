const React = require('react')
const Layout = require('./Layout.jsx')

class New extends React.Component {
    render(){
        return(
           <Layout>
               <div class="new">
               <div>
               <h1>Build a new car</h1>
               <p>"I couldn't find the car of my dreams, so I built it myself." -Ferdinand Porche</p>
               </div>
                   <form action="/cars" method="POST">
                      Name: <input type="text" name="name"/><br/>
                      Image: <input type="text" name="img"/><br/>
                      Price: <input type="text" name="price"/><br/>
                      MPG: <input type="string" name="mpg"/><br/>
                      Fuel Type: <input type="text" name="fuel_type"/><br/>
                      Transmission: <input type="text" name="transmission"/><br/>
                      Features: <input type="text" name="features"/><br/>
                      <input type="submit" value="Add"/> 
                   </form>
                   
               </div>
           </Layout>
        )

    }
}

module.exports = New;