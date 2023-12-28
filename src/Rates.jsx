import { useState } from "react";
import listItem from "./List";
import img from "../src/assets/images/illustration-thank-you.svg";

function ThankYou({ selectedNum }) {
  return (
    <div className="thank-you">
      <img src={img} alt="thankYou" />
      <div className="result">You selected {selectedNum} out of 5</div>
      <h1>Thank you</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

function Rate({ handleNum }) {
  return (
    <>
      <div className="icon">
        <div></div>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <ul onClick={(e) => handleNum(e)} className="btn-flex">
        {listItem}
      </ul>
      <button className="primary-btn" type="submit">
        SUBMIT
      </button>
    </>
  );
}

function MyComponent() {
  const [click, setClick] = useState(false);
  const [selectedNum, setSelectedNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(true);
    handleNum();
  };

  const handleNum = (e) => {
    if (e.target.matches("li") || e.target.matches("button")) {
      setSelectedNum(e.target.id);
    }
  };

  const condition = !click ? (
    <Rate handleNum={(e) => handleNum(e)} />
  ) : (
    <ThankYou selectedNum={selectedNum} />
  );

  return (
    <main>
      <form onSubmit={handleSubmit} className="container">
        {condition}
      </form>
    </main>
  );
}

export default MyComponent;
