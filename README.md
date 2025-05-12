# Namaste React

# Parcel
- Dev build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++ : keeps an eye on all files
- Caching - Fater Builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers (different bundles for different browser)
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - remove unused code
- Creates different dev & production bundles (npx parcel build index.html)

# Namaste Food
- Header - logo, navitems
- body - search, rescontainer, rescard (img, name of res, star ratings, cuisine, delivery time)
- footer - contact, address, links, copyright

# Episode -5

# 2 types of export/import

- default export/import
export default Component;
import Component from "path";

- Named export/import
export const Component;
import {Component} from "path";

# we can use default & named export on same component

# Why react is fast - because it can do faster, efficient DOM manipulation, it has virtual DOM, reconciliation
# when we give superpowers of react(hooks) to javascript variable, it becomes super powerful variable (state)

# react hook - normal javascript function which is prebuilt & given by react
normal JS utility functions
- useState() - used to create & maintain superpowerful state variables in react component
- whenever a state variable updates, React re-renders & updates UI

# how do we build large-scale applications
- react makes dom operations superfast, logic of updating ui is known as re-rendering
- react keeps ui layer in sync with data layer
- react uses reconciliation algorithm (aka react fibre) = react 16
- whenever we have ui, react creates a virtual DOM (not the actual DOM)
- actual DOM is tags & html (body/ react.createElement = js object)
- virtual DOM is a representation of actual DOM

# Diff algorithm
- it finds out the difference b/w updated virtual DOM & previous virtual DOM
- it calculates the difference & updates the actual DOM on every render cycle
- finding difference b/w html is difficult but b/w objects is fast
- virtual DOM is object representation of whole DOM, when we click on button, a new object is formed
- react finds the difference b/w objects & update DOM
- incremental rendering: ability to split rendering work into chunks & spread it out over multiple frames