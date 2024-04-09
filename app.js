// npm - global command 
// npm --version

// local dependency  - use it only in particular project

//npm i <packageName>

// global dependency - use irt in any project
// npm install -g <packageName>


//package.json - manifest file (stores important info abour project)

// manual approach(create package.json in the root )
// npm init(step by step , press enter to skip)
// npm init - y (everything default)


const  _ = require ('lodash');

const items =[1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)