# Install React JS

**Install with NPM** downloading the dependencies.  
`npm init`

Install webpack  
`npm install webpack webpack-dev-server --save-dev`

Install React along with react-dom  
`npm install react react-dom --save`

Install Babel Dependencies  
`npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`

Install React Bootstrap
`npm install react-bootstrap --save-dev`

**Create basic Files**
* webpack.config.js (info about the dependencies and files from where browser should start rendering)  
![webpack.config.js](https://github.com/selvesandev/react-book-app/blob/master/doc-img/webpack.png)
  
* html (html template which is used by browser to render the element)  
![index.html](https://github.com/selvesandev/react-book-app/blob/master/doc-img/index.png)
  
* jsx file (contains description of what all components we want to display on our webpage and how they'll behave)  
![jsx](https://github.com/selvesandev/react-book-app/blob/master/doc-img/webpack.png)


* Edit the package.json File  
```php
"scripts": {
    "it": "webpack-dev-server --hot"
  }
```

Not type `npm run it` in the terminal


## Compoenents
component is react are reusable independent pieces of code that either achive a 
specific function or represent part of user interface.

   
Create a global component which will serve as the a component for our entire react
application.   
`\app\components\global.jsx`

```javascript
import React, {Component} from 'react';

class Global extends Component {
    render() {
        return (
            <div><h1>Global App Component</h1></div>
        );
    }
}

export default Global;
```

Import the global component in our entry point `script.jsx`

```javascript
import Global from './components/global.jsx';
ReactDom.render(<Global/>, document.getElementById('root'));
```

## State
Simply refers to the idea that the data is particular to a react component.
As the user interacts with the component the state updates and shows relevant component changes
based on that updating state and incoming data.   
In order to acknowledge the user typed input.  

```javascript

class Global extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: ''
        };
    }
    render() {
        return (
                <FormControl 
                onChange={event => this.setState({query: event.target.value})} 
                placeholder="Search for a book" 
                type="text"/>
            )
    }
    
    search() {
      console.log(this.state.query);
    }
}

```


## Book Explorer
Using google Books API.  
https://developers.google.com/books/  

```javascript

search() {
     const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
     fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
       .then(response => response.json())
       .then(json => console.log(json));
}    
```

#### Gallery Component 
Create a gallery components to display all the books that were fetched.
Which will be the child component used by the main Global Component and the data `item` will
be passed with the prop attribute.  

Global.jsx
```javascript
 <Gallery items={this.state.items}/>
```

Gallery.jsx
```javascript

import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        let notFound = 'https://mosaikweb.com/wp-content/plugins/lightbox/images/No-image-found.jpg';
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLinks} = item.volumeInfo;
                        return (
                            <div key={index} className="book">
                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : notFound}
                                    alt="Book Image"
                                    className="book-image"
                                />
                                <div className="book-text">
                                    {title}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Gallery;

```