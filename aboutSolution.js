```javascript
// pages/aboutSolution.js

export default function About() {
  const [user, setUser] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    try {
      const userFromStorage = JSON.parse(localStorage.getItem('user'));
      setUser(userFromStorage);
    } catch (err) {
      setError('Error retrieving user data.');
    }
  }, []);

  if (error) {
    return <div><h1>About Page</h1><p>{error}</p></div>;
  }

  if (!user) {
    return <div><h1>About Page</h1><p>Loading user data...</p></div>;
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome {user.name}</p>
    </div>
  );
}
```