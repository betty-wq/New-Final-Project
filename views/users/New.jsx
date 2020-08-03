const React = require('react')
const Layout = require('../Layout.jsx')

class NewUser extends React.Component {
    render(){
        return(
            <Layout>
            <div class="container">
                <h1>New User</h1>
                <form action="/user" method="POST">
                    username: <input type="text" name="username"/><br/>
                    password: <input type="password" name="password"/><br/>
                    <input type="submit" value="create user"/> 
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = NewUser