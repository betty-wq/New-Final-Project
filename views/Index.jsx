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
               <div>
               {this.props.username ? logout : ''}
               <div>
               <h1>Welcome to My Cars {this.props.username}</h1>
               <p>At My Cars, we can take care of all your needs. We're happy to help drivers like you from all over the country with all of your automotive needs!. The car you are looking at today and want to think about buying tomorrow may be the same car someone else looked at yesterday and will be back to buy today. Hurry up and get your dream car! </p>
               </div>
               <img src="https://www.cstatic-images.com/car-pictures/maxWidth503/usc90fot11af021001.png"></img>
               <img src="https://www.cstatic-images.com/car-pictures/xl/usc90fot11af021003.png"/>           
               </div>
           </Layout>
       )

    }
}


module.exports = Index