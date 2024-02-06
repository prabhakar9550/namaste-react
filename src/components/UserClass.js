import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
          userInfo: {
            name: "Dummy",
            location: "Default",
           
          },
            
        };
    //   console.log(this.props.name + "Child Constructor");
    }

   async componentDidMount(){


     //   console.log(this.props.name + "Child Component Did Mount");

     const data = await fetch("https://api.github.com/users/prabhakar9550");
     const json = await data.json();

      this.setState({
        userInfo: json,
      })

    // console.log(json);
    }

    componentDidUpdate(){
      //  console.log("Component Did Update");
    }

    componentWillUnmount(){
     //   console.log("Component will unmount");
    }
  
    render() {
    //    console.log(this.props.name +  "Child Render")
      
    const {name, location, avatar_url} = this.state.userInfo;
      
        return  (
        
            <div className="user-card">
                    <img className="image" src={avatar_url}/>
                   <h2>Name: {name}</h2>
                   <h3>{location}</h3>
                  <h3>Contact: prabhakar7382@gmail.com</h3>
            </div>
        );
    }
}

export default UserClass;