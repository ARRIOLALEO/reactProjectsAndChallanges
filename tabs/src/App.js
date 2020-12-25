import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [datas, setData] = useState([
    { title: "", dates: "", duties: [], company: "" },
  ]);
  const [value, setValue] = useState(0);

  const { title, dates, duties, company } = datas[value];
  useEffect(() => {
    const callApi = async () => {
      try {
        const makeRequest = await fetch(url);
        if (!makeRequest.ok) {
          throw new Error("this is my error");
        }
        const information = await makeRequest.json();
        setData((prevData) => (prevData = information));
      } catch (err) {
        console.log(err);
      }
    };
    callApi();
  }, []);

  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {datas.map((btnChanger, index) => {
            return (
              <button
                key={btnChanger.id}
                className={`job-btn ${index === value && "active-btn"}`}
                onClick={() => {
                  setValue((prevValue) => (prevValue = index));
                }}
              >
                {btnChanger.company}
              </button>
            );
          })}
        </div>
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
