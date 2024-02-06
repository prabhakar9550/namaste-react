# Namaste React


# Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algoritham - written in c++ 
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code 
- Different dev and prod bundles


# Namaste Food

/*
* Header
*  -Logo
*  -Nav Items
*Body
* - Search bar
* - RestavrantContainer
*  -- RestavrantCard
*  --- Img
*  --- Name of the res, Star Rating, cuisine, delery time
*Footer
* - Copyright
* - Links
* - Address
* - Contact
*/


Two types of export/import

- default export/ import;

export default Component;
import Component from "path";

- Named Export / Import

export const Component;
import {Component} from "path";


# React Hooks

 (Normal JS utility function)

 -useState() -- superpowerful state variables in react
 -useEffect()

 
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing

"https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=426778&catalog_qa=undefined&submitAction=ENTER"

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store 
- Connect our store to our app
- Slice(cartSlice)
- dispatch(action)
- Selector


# Types of testing (devloper)
- Unit Testing
- Integration Testing
- End to End Testing - e2e testing

# Setting up Testing in our app

- Install React Testing Library
- Installed jest
- Installed Babel depencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest Configuration -- npx jest --init
- Install jsdom library
- instll @babel/present-react - to make JSX work in test cases
- Include @babel/present-react
- Install npm i -D @testing-library/jest-dom

