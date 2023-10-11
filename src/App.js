import "./styles.css";
import Values from "values.js";
import SingleColor from "./singleColor";
import React from "react";

export default function App() {
  const [color, setColor] = React.useState("");
  const [error, setError] = React.useState(false);
  const [list, setList] = React.useState(new Values("#f15045").all(8));

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);

      console.log(colors);
    } catch (error) {


      
      setError(true);
      console.log(error);
    }
  };
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="Color-container">
      <div className="color-heading">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input className="input-color" type="Color" val />
          <input
            onChange={handleChange}
            className={`${error ? "error" : null}`}
            type="text"
            value={color}
            placeholder="#121212"
          />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              hexColor={color.hex}
              key={index}
              {...color}
              index={index}
            ></SingleColor>
          );
        })}
      </section>
    </div>
  );
}
