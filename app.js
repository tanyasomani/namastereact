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

const parent = React.createElement(
    "div", 
    {id:"parent"},
   [ React.createElement("div", 
        {id:"child"},
        [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]
    ),
React.createElement("div", 
            {id:"child"},
            [React.createElement("h1",{},"I am h1 tag"), React.createElement("h2",{},"I am h2 tag")]
        ),] )

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// react can be written without jsx, but it becomes complex





