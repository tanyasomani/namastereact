import React from "react";
import ReactDOM from "react-dom/client"
// const heading = React.createElement(
//     "h1",
//     // we can give attributes to tag
//     {id: "heading", xyz: "abc"},
//     "hello from react ext");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// console.log(heading);

// create nested elements
{/* <div id="parent">
    <div id ="child">
       <h1></h1>
    </div>
</div> */}

// const parent = React.createElement("div", 
//     {id:"parent"},
//     React.createElement("div",
//         {id: "child"},
//         React.createElement("h1", {}, "I am h1 tag")
//     )
// )

// console.log(parent); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

{/* <div id="parent">
    <div id ="child">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
</div> */}

// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//     React.createElement("div", 
//         {id:"child"},
//         [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]
//     ) )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

{/* <div id="parent">
    <div id ="child">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
       <div id ="child2">
       <h1>I am h1 tag</h1>
       <h2>I am h2 tag</h2>
    </div>
</div> */}

// const parent = React.createElement(
//     "div", 
//     {id:"parent"},
//    [ React.createElement("div", 
//         {id:"child"},
//         [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]
//     ),
// React.createElement("div", 
//             {id:"child"},
//             [React.createElement("h1",{},"Namaste"), React.createElement("h2",{},"I am h2 tag")]
//         ),] )

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// react can be written without jsx, but it becomes complex

// this code is not optimised, it is not production-ready, we need to do lot of processing before going into
// production, we need to lot of processing in local :minify, bundle our code, do code splitting, image optimisation
// chunking, compress the code
// we need lot of packages apart from react to make our app fast

// npm is the repository where all packages, libraries are hoisted and managed
// npm init
// package.json is the configuration file for npm, packages are aka dependencies 
// most imp package: bundler
// bundler helps to keep the code minified, bundled, cached, clean before sending to production
// eg: webpack, parcel, vite

// create react app uses webpack & babel behind the scenes

// 2 types of dependencies: devdependency: which are required in development phase,
// normal dependency: can be used in production
// npm install -D parcel

//tilde: upgrades to major updates & caret: upgrades to minor updates
// packagelock.json locks the version & keeps record of exact version
// package.json keeps record of approx version

// packagelock.json keeps a hash integrity to verify whatever version is in dev machine, same be in prod

// node modules contains all the code we fetched from npm for all dependencies, node modules act as the database
// it contains transitive dependencies: dep along with their dep
// every dependency has its own package.json, own devdependency, own normal dep: this is transitive dep

// add gitignore
// should we put package & packagelock in git?
// they both maintain the log of dependencies
// if we have package & packagelock, we can regenerate nodemodules by npm install
// whatever we can regenerate, dont put on git

// npx parcel index.html : our app is hoisted on localhost
// npx : when we want to execute the package

// other way to add react is by npm 
// why prefer npm over cdn

// npm i react, npm i react-dom, now no longer cdn needed
// import react

// parcel-cache & dist can be regenerated
// browsers-list  // "last 2 Chrome version", "last 2 Firefox version"

// React.createElement => Object => HTMLElement (render)

// JSX -> javascript syntax which is easier to create react element
// we can write react without jsx

// JSX - HTML-like or XML-like syntax
// JSX is not valid javascript : it cannot be understood by reactdom, browsers or js engines
// parcel (cabinet of ministers: babel transpiles) transpiles(converts jsx to react) it before it reaches js engine
// JSX => babel transpiles to React.createElement => ReactElement-JS Object => HTMLElement(render)
// babel: transpiler / javascript compiler : converts jsx & also es6+ code 

// React element
const jsxHeading = (
<h1 id="heading" className="head" tabIndex="1">Namaste react</h1>
);
console.log(jsxHeading) // same as react createelement

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading)

// prettier, bracket pair colorizer, eslint, better comments

// react component
// class based component
// functional component

//functional component: capital letter: normal javascript function which returns jsx code (react element)
// we need to wrap jsx around round bracket so that babel knows where is jsx starting & ending

// React Functional Component
// const HeadingComponent = ()=>{
//    <div id="container">
//       <h1>Functional component</h1>
//       </div>
// } 

// how to convert react element to functional component
// change name to capital & make it arrow function
// we cannot render react component directly as root.render(HeadingComponent)
// root.render(<HeadingComponent/>)
// babel understands this is react component

const fn = ()=> <h1>Functional component</h1>;
// const fn = ()=> {
// return <h1>Functional component</h1>
// };
// const fn = ()=> (
//    <div id="container">
//    <h1>Functional component</h1>
//    </div>
// );

const Title = ()=>(
   <h1 className="head">
      Title
   </h1>
)

// component composition
// const HeadingComponent = ()=>{
//    <div id="container">
//    <Title/>
//       <h1>Functional component</h1>
//       </div>
// } 

// we can run any javascript code inside curly braces
// jsx first sanitises the curly bracket data to prevent cross-side scripting attacks (malicious data coming from bad api)
const number = 100;
const HeadingComponent = ()=>{
   <div id="container">
   <Title/>
   <Title></Title>
   {Title()}
   {number}
   {100+200}
   {jsxHeading}
   {console.log("abcd")}
      <h1>Functional component</h1>
      </div>
} 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)