import React from 'react';

function CustomerProfile({ customer }) {
  return (
    <div>
      <h2>Customer Profile</h2>
      <div>
        <strong>Name:</strong> {customer.name}
      </div>
      <div>
        <strong>Email:</strong> {customer.email}
      </div>
      <div>
        <strong>Address:</strong> {customer.address}
      </div>
      <div>
        <strong>Town:</strong> {customer.town}
      </div>
    </div>
  );
}

export default CustomerProfile;
