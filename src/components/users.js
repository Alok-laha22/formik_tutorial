import React from 'react';


let dummy_users = [
    {name: 'Alok Laha', Age: 24},
    {name: 'Ayan Laha', Age: 25},
    {name: 'Tarak Laha', Age: 26},
    {name: 'Raju Laha', Age: 27}
]


class Users extends React.Component {
    constructor() {
        super();
        this.state = {
            users: dummy_users,
            isClicked: false
        }
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler () {
        this.setState({isClicked: !this.state.isClicked})
    }

    componentDidMount() {
        setTimeout(()=> this.setState({isClicked: true}), 2000);
    }

    render () {
        let data = [];
        this.state.users.forEach(element => {
            console.log('hi ',element.name);
              data.push (<div style={{color: this.state.isClicked ? 'black': 'red', paddingBottom: "2px"}} onClick={this.clickHandler}>
                The name of the member is {element.name} &&
                The age of the member is {element.Age} <br />
                </div>)
            })

        return ( 
            <div>
            {
            data
            }
            </div>
        )
    }
}

export default Users;