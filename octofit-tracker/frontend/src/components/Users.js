




import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;


function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Users API endpoint:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const items = data.results || data;
        setUsers(items);
        console.log('Fetched users:', items);
      })
      .catch(err => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4">Users</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user.id || idx}>
                  <td>{idx + 1}</td>
                  <td>{user.id || '-'}</td>
                  <td><pre className="mb-0">{JSON.stringify(user, null, 2)}</pre></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
