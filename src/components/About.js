import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props){
        super(props);

      //  console.log("parent constructor")
    }

    componentDidMount(){
     //   console.log("Parent Component Did Mount");
    }

    render(){
   //     console.log("parent Render")
    
        return (
            <div>
                <h1>About Class Component</h1>
                <div>LoggedIn User
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1 className="text-lg font-bold">{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste React Web Series</h2>
                
                <UserClass name={"First"} location={"Hyderabad Class"}/>

              
            </div>
        );
    }
}



export default About;