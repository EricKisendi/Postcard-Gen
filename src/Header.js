import './Header.css';

function App() {
  return (
    <header className='Navbar'>
      <section className="icon">
        <lord-icon
            src="https://cdn.lordicon.com/bhfjfgqz.json"
            trigger="hover"
            colors="primary:#">
        </lord-icon>
        <h2>Postcard Generator</h2>
      </section>
      <section>
        <p>Japan Edition</p>
      </section>
    </header>
  );
}

export default App;
