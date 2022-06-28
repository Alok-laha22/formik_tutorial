import React from 'react';
// import Formik from 'formik';
// import * as Yup from 'yup';
import UserContext from '../store/UserContext';


class Users extends React.Component {

    constructor(props,context) {
        super(props,context);
        console.log('context value',this)
        this.state = {
            users: this.context.users_list,
            isClicked: false
        }
        this.clickHandler = this.clickHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    clickHandler () {
        this.setState({isClicked: !this.state.isClicked})
    }

    changeHandler ({target}) {
        console.log('value is:',target.value)
        //Need to see how users  list can be rendered based upon key strokes
    }

    componentDidMount() {
        setTimeout(()=> this.setState({isClicked: true}), 3000);
    }

    render () {
        let data = [], i=0;
        this.state.users.forEach(element => {
            console.log('hi ',element.name);
              data.push (<div key={++i}>
                <p style={{color: this.state.isClicked ? 'green': 'red', paddingBottom: "2px"}} >The name of the member is {element.name} &&
                The age of the member is {element.Age}</p>
                <br />
                </div>)
            })

        return ( 
            <div>
            {
                <>
                {data}
                <br /> <button onClick={this.clickHandler}>Toggle color</button>
                <br /> <br />
                <input type='text' placeholder='Type name here' minLength='3' maxLength='10' name='name' value={undefined} onChange={this.changeHandler}  required />
                </> 
            }
            </div>
        )
    }
}

Users.contextType = UserContext;

export default Users;