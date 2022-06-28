import React from 'react';


const UserContext = React.createContext({users_list:[]});
console.log('context is..', UserContext);

export default UserContext;