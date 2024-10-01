import styles from "./container.module.css";
import { useState } from "react";
const Container = () => {
  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState("0");
  const [display, setDisplay] = useState(null);
  const array = [];

  const addonfunction = (e) => {


    if (subject === "" || hours === 0) {
      alert("Please enter a valid subject and hours");
      return;
    }
    setDisplay(
      <div className={styles.div}>
        <h3>{subject}</h3>
        <p id="currenthrs">{hours} hours</p>
        <button className={styles.increase} onClick={() => setHours + 1}>+</button>
        <button className={styles.decrease} onClick={() => setHours - 1}>-</button>
      </div>
    );
    setHours(0)
    setSubject("")
    array.push(display);
  };
  return (
    <div className={styles.main_container}>
      <div>
        <h1 className={styles.heading}>Geekster Education Planner</h1>
        <hr />
      </div>

      <div className={styles.input}>
        <input
          onChange={(e) => setSubject(e.target.value)}
          type="text"
          placeholder="Subject"
          value={subject}/>
        <input
          onChange={(e) => setHours(parseInt(e.target.value))}
          type="number"
          placeholder="Hours"
          value={hours}
        />

        <button onClick={addonfunction}>Add</button>
      </div>

      <div id="div">{display}</div>
    </div>
  );
};

export default Container;
