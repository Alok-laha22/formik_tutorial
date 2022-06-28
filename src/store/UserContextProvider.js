import { Component } from 'react';
import UserContext from './UserContext';


// let dummy_data = [
//     {name: 'Alok Laha', Age: 24},
//     {name: 'Ayan Laha', Age: 25},
//     {name: 'Tarak Laha', Age: 26},
//     {name: 'Raju Laha', Age: 27}
//   ]

class UserContextProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            dummy_data : [
                {name: 'Alok Laha', Age: 24},
                {name: 'Ayan Laha', Age: 25},
                {name: 'Tarak Laha', Age: 26},
                {name: 'Raju Laha', Age: 27}
              ]
        }

        console.log('context provider ', UserContext)
    }

    render() {
        const contextValue = {
            users_list: this.state.dummy_data
        }
        console.log('props are: ', this.props);
        return (
        <UserContext.Provider value={contextValue}>
            {this.props.children}
        </UserContext.Provider>
        )
    }
}


export default UserContextProvider;
