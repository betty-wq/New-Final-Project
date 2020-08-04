const React = require('react')
const Layout = require('../Layout.jsx')

class LoginUser extends React.Component {
    render(){
        return(
            <Layout>
            <div class="logincontainer">
                <ul class="navs">
                    <li class="nav"><a href="/cars">HOME</a></li>
                    <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
                    <li class="nav">< a href="/cars/new">ADD A NEW CAR</a></li>
                    <li class="nav"><a href="/user/new">SIGN UP</a></li>
                </ul>
                <h1 class="login">Login</h1>
                <form class="loginform" action="/sessions/" method="POST">
                    <input class="logininput" type="text" name="username" placeholder="username"/><br/>
                    <input class="logininput" type="password" name="password" placeholder="password" /><br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
            </Layout>
        )
    }
}

module.exports = LoginUser