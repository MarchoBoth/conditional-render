import { fetchUser } from './utils';
import { Logo } from './Logo';
import './styles.css';

export default function App() {
  const user = fetchUser();
  console.log(user);
  return (
    <div className="App">
      <nav className="navbar flex justify-between items-center p-4 bg-gray-200">
        <Logo />

        {/* Kondisi pertama jika user belum login */}
        {!user.isLoggedIn ? (
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Login
          </button>
        ) : (
          // Kondisi kedua jika user sudah login
          <button className="bg-gray-400 text-white px-4 py-2 rounded">
            Logout
          </button>
        )}
      </nav>

      <div className="p-4">
        {/* Kondisi render pesan */}
        {user.isLoggedIn ? (
          user.username ? (
            <h2>Welcome {user.username}</h2>
          ) : (
            <h2>Logged in. Please complete your username!</h2>
          )
        ) : (
          <h2>Please login to continue</h2>
        )}
      </div>
    </div>
  );
}
