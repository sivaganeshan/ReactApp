The Below steps been followed to create local environment for the development of React Apps.

Here i am using node,npm,babel and webpack to create production grade react apps. 
Also I am setting up environment by using POSIX terminal commands , windows users pardon me.

Some basic jargons before we dive into react app and also the following components 
are required to run this example(NodeJs along with NPM should be installed prior to start off)

1. Node    - Javascript runtime built on chrome v8 javascript engine.(v8.9.3)
2. NPM     - Package Manager for javascript to maintain packages.(v5.5.1)
3. Babel   - For the Transiplation of jsx to js with react components.("babel-core": "6.26.0","babel-loader": "6.4.1","babel-              preset-react": "6.24.1")
4. Webpack - Javascript module bundler, generates static assests and manage dependencies (v1.15.0)

***The component versions mentioned above is relative to the time i am developing this app.


Lets start with the Hello world example.

Lets Execute the following commands to create Require folders and files.
```
mkdir reactApp
mkdir reactApp/js reactApp/jsx 

cd ./reactApp
touch ./jsx/app.jsx  ./jsx/hello-world.jsx index.html webpack.config.js
```

Now install required packages using NPM.

```
npm init -y
npm i react@15 react-dom@15 -ED
npm i webpack@1 -ED
npm i babel-core@6 babel-loader@6 babel-preset-react@6 -ED
```

Here -ED specified in the npm commands Which makes the NPM packages to be in the exact 
version and also only for development purpose only.

Once all packages installed successfully, We have to edit the Package.json file so that 
babel and webpack can do its job while building the app.

Babel react presets added in the root elemnet. webpack build and build-watch configs are 
added inside the scripts as mentioned below.

```
"babel":{
    "presets":["react"]
  }
  
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build" : "./node_modules/.bin/webpack",
    "build-watch" : "./node_modules/.bin/webpack -w"
  }
 ``` 
Webpack.config.js needs to be modified as follows:
```
module.exports ={
    entry:'./jsx/app.jsx',
    output:{
        path: __dirname +'/js/',
        filename: 'bundle.js'
    },   
    module :{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude :/(node_modules)/,
                loaders : ['babel']
            }
        ]
    }
}
```
Now the environment is ready, lets create react the hello world component

Edit the ./jsx/hello-world.jsx file as below :
```
const React = require('react');

class HelloWorld extends React.Component
{
    render(){
        return(
            <h1>Hello,World!!!</h1>
        )
    }
}

module.exports = HelloWorld;
```
Here i am creating the Helloworld composable react component by extending React.Component. The render() function is used 
to define html elements which are required by your component. And export your component by using Module.exports. require()
and module.exports are nodejs components.

Now add the following into the .jsx/app.jsx
```
const React = require('react');
const ReactDom = require('react-dom');

const HelloWorld = require('./hello-world.jsx');

ReactDom.render(
    <HelloWorld/>,
    document.getElementById('content')
)   
```
From the above code, we imported hello-world component and by using ReactDom.render function render all the components used in app.
ReactDom.render will render all the react components inside the mentioned html div component. Here, 'content' is react root element
to render.

Finally lets define the index.html file with the following html tags.
```
<html>
    <head>
    </head>
    <body>
        <div id='content'>
            </div>
            <script type='text/javascript' src="js/bundle.js">
            </script>
    </body>
</html>
```
We are almost there, save all file. Transpile the jsx files by executing the following command.
```
npm run build
```
now the bundle.js will be created under ./js folder, the javascript generated will be supported for all browsers.
Open the index.html ,here we go our first app renders.

Also if you just want try helloWorld react app example without the above mentioned head ache, just the pull the branch, execute the following commands and open index.html. Tada, you are done.

```
npm install
npm run build

```
