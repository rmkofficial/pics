import SearchBar from "./components/SearchBar";
import SearchImages from "./api";

function App() {
  const handleSubmit = (term) => {
    SearchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
