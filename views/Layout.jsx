const React = require('react')

class Layout extends React.Component {
    render(){
        return(
            <html>
                <head>
                <link rel="stylesheet" href="/style.css"></link>
                <link href="https://fonts.googleapis.com/css2?family=Courgette&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet"></link>

                    <title>Cars App</title>
                </head>
                <body>
                    <div>
                    <ul class="navs">
                <li class="nav"><a href="/cars">HOME</a></li>
               <li class="nav"><a href="/cars/Display">VEHICLES</a></li>
                {/* <li class="nav"><a href="./sessions/new">SIGN IN</a></li> */}
               <li class="nav">< a href="/cars/new">ADD A NEW CAR</a></li>
               </ul>
                    <h1>{this.props.name}</h1>
                    <main>
                     {this.props.children}
                    </main>
                    <footer >
                    <div>© 2020 Copyright: made by Bethlehem Beshah</div>
                    </footer>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Layout