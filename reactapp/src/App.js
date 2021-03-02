import "./App.css";

function App() {
  const yas1 = 34;
  const yas2 = 34;
  return (
    <div className="App">
      <h1>merhaba react</h1>
      <h2 className="class1">{1 + 1}</h2>
      <h3>{"samet".toUpperCase()}</h3>
      <h1>{yas1 + yas2}</h1>
      <div>
        {yas1 + yas2 < 25 ? (
          <div>kullanici yasli</div>
        ) : (
          <div>kullanici genc</div>
        )}
      </div>
    </div>
  );
}

export default App;
