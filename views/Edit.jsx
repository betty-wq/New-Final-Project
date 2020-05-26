const React = require('react')
const Layout = require('./Layout.jsx')

class Edit extends React.Component{
    render(){
        const { car } = this.props
        return(
            <Layout>
                <div class="container">
                <a href="/cars">Home</a>
                <h1>Edit Page</h1>
                <form class="forms" action={`/cars/edit/${car._id}?_method=put`} method="POST">
                      Name:        <input type="text" name="name"/><br/>
                      Price:       <input type="number" name="price" min="0"/><br/>
                      Image:        <input type="text" name="img"/><br/>
                      Stock:        <input type="number" name="stock" min="0"/><br/>
                      MPG:          <input type="text" name="mpg"/><br/>
                      Fuel Type:    <input type="text" name="fuel type"/><br/>
                      Transmission: <input type="text" name="transmission"/><br/>
                      Features:     <input type="text" name="features"/><br/>
                      <input type="submit" value="Edit"/>
                      </form>
                      </div>
            </Layout>
        )
    }
}

module.exports = Edit