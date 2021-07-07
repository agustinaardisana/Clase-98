import "./Filter.scss";

const Filter = ({ handleChangeRadio, handleChangeInput, value }) => {
  return (
    <section className="section--filter">
      <div>
        <label>
          <input
            onChange={handleChangeInput}
            value={value}
            placeholder="Search by name"
          ></input>
        </label>
      </div>

      <div>
        <label for="genero"> Gender</label>
        <input
          name="genero"
          type="radio"
          onChange={handleChangeRadio}
          value="male"
        />{" "}
        Male
        <input
          name="genero"
          type="radio"
          onChange={handleChangeRadio}
          value="female"
        />{" "}
        Female
        <input
          name="genero"
          type="radio"
          onChange={handleChangeRadio}
          value="unknown"
        />{" "}
        Unknown
        <input
          name="genero"
          type="radio"
          onChange={handleChangeRadio}
          value="genderless"
        />{" "}
        Genderless
      </div>
    </section>
  );
};

export default Filter;
