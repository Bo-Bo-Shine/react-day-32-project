import { useFetch } from "./hooks/useFetch";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useToggle } from "./hooks/useToggle";

function App() {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [open, toggleOpen] = useToggle(false);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <button onClick={toggleOpen}>
        {open ? "Close Navbar" : "Open Navbar"}
      </button>
      {open && (
        <nav>
          {data.map(user => <p key={user.id}>{user.name}</p>)}
        </nav>
      )}
    </div>
  );
}

export default App;
