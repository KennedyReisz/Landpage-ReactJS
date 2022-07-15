import "./App.global.css";

function App() {
  return (
    <div className="App">
      <div className="top-side">
        <a href="https://www.youtube.com/watch?v=qrFdCuOi5n8">
          <img
            src="https://www.pngmart.com/files/13/Anime-PNG-Transparent.png"
            alt=""
          />
        </a>
      </div>

      <div className="down-side">
        <div className="about-container">
          <h1>{"< Hello World />"}</h1>
          <h3>I'm Kennedy!</h3>
          <p>
            Living in Maringá-PR (Brazil), Fullstack developer more javascript
            oriented
          </p>

          <img
            className="img-about-logo"
            src="https://cdn.discordapp.com/attachments/947298762555027516/989168238556504114/2zz.png"
            alt=""
          />

          <p>
            <a href="">Kennedy#1000</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
