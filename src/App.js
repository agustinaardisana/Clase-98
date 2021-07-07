import { useEffect, useState } from "react";
import "./App.scss";
import Filter from "./components/Filter";
import banner from "./assets/banner.png";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/?name=${value}&gender=${gender}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        console.log(data);
      });
  }, [value, gender]);

  const handleChangeInput = (e) => setValue(e.target.value);

  const handleChangeRadio = (e) => setGender(e.target.value);

  return (
    <>
      <header>
        <img src={banner}></img>
      </header>
      <Filter
        handleChangeInput={handleChangeInput}
        handleChangeRadio={handleChangeRadio}
        value={value}
      />
      <section>
        {characters.map((character) => (
          <article>
            <img src={character.image}></img>
            <div className="container">
              <div>
                <h3>{character.name}</h3>
                <p>{character.status}</p>
              </div>
              <div>
                <p>Last known location:</p>
                <h5>{character.location.name}</h5>
              </div>
              <div>
                <p>First seen in:</p>
                <h5>xxx</h5>
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default App;
