const React = require('react')
const Layout = require('./Layout.jsx')

class Index extends React.Component {
    render() {
        const logout = (
            <form action="/sessions/?_method=delete" method="post">
                <input type="submit" value="Logout" />
            </form>
        );
        const { cars } = this.props;
       return(
           <Layout>
               <div class="main">
               {this.props.username ? logout : ''}
               <div>
               <ul class="navs">
                <li class="nav"><a href="/cars">HOME</a></li>
               <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
               <li class="nav">< a href="/cars/new">ADD A NEW CAR</a></li>
               </ul>
               <h1>Welcome to My Cars {this.props.username}</h1>
               <p>At My Cars, we can take care of all your needs. We're happy to help drivers like you from all over the country with all of your automotive needs!. The car you are looking at today and want to think about buying tomorrow may be the same car someone else looked at yesterday and will be back to buy today. Hurry up and get your dream car! </p>
               </div>
               <div class="mycars">
               <img src="https://s.marketwatch.com/public/resources/images/MW-HY837_at_gla_ZH_20200122173813.jpg" alt="slide6"/>
               </div>          
               </div>
           </Layout>
       )

    }
}


module.exports = Index