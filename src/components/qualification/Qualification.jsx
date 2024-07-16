import "./qualification.css";

const Qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">My journey ...</h2>
      <span className="section__subtitle"></span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">Junior Developer</h3>
              <span className="qualification__subtitle">CyberLark Pty Ltd</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2024
              </div>
            </div>
          </div>
          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">
                Deploma & Cert IV in Programmming
              </h3>
              <span className="qualification__subtitle">Tafe NSW</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>

            <div>
              <h3 className="qualification__title">CPA certified</h3>
              <span className="qualification__subtitle">CPA</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2023
              </div>
            </div>
          </div>

          <div className="qualification__data">
            <div>
              <h3 className="qualification__title">System Accountant</h3>
              <span className="qualification__subtitle">Resimac Ltd</span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2018 - 2023
              </div>
            </div>

            <div>
              <span className="qualification__rounder"></span>
              <span className="qualification__line"></span>
            </div>
          </div>

          <div className="qualification__data">
            <div></div>

            <div>
              <span className="qualification__rounder"></span>
            </div>

            <div>
              <h3 className="qualification__title">Bachelor</h3>
              <span className="qualification__subtitle">
                Victoria University
              </span>
              <div className="qualification__calender">
                <i className="uil uil-calendar-alt"></i> 2017
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
