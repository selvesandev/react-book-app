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