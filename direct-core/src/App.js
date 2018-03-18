import React, { Component } from 'react';
import Admin from './admin/admin';
import AdminUser from './admin-user/admin-user';

import './App.css';

class App extends Component { 

  render() {
      
    return (
        <div>
            <Admin />
            <AdminUser />
        </div>
    )
  }
}

export default App;
