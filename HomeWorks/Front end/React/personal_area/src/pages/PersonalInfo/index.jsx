import { useState } from 'react';
import './index.css'
function PersonalInfo({user}) {
    
    return (
        <div className="user-profile">
          <h2>User Profile</h2>
          <div className="user-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
          <div className="user-address">
            <h3>Address</h3>
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>Suite:</strong> {user.address.suite}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
          </div>
          <div className="user-company">
            <h3>Company</h3>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>
          </div>
        </div>
      );

}

export default PersonalInfo;