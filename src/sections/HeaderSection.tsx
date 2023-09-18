import person1 from '../assets/images/person1.png';
import person2 from '../assets/images/person2.png';
import arrow from '../assets/icons/navigatingArrow.png';
import caller from '../assets/icons/callerIcon.png';
import Navbar from '../components/Navbar';

export default function HeaderSection() {
  return <>
  <Navbar />
    <section className="header">
      <div className="frame">
        <div className="texts">
          <p>100% Satisfaction Guarantee</p>
          <h2>
            Experience top-Quality Education With Personalized Online Tutoring
          </h2>
          <p>
            Get quality world class courses at the best price and learn any new
            skill from our expert mentors.
          </p>
          <div className="btns">
            <button className="btn btn-black">Courses</button>
            <button className="btn btn-black">Placement Courses</button>
          </div>
        </div>
        <div className="images">
          <div className="img-wrapper">
            <div className="circle circle-3"></div>
            <div className="img-container img-1">
              <img src={person1} alt="Man Working on Laptop" />
            </div>
          </div>
          <div className="img-container img-2">
            <img src={person2} alt="woman working on Laptop" />
          </div>
        </div>
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-4"></div>
      </div>
      <div className="outer-icons">
        <div className="arrow-wrapper">
          <img src={arrow} alt="Arrow" />
        </div>
        <div className="caller-wrapper">
          <img src={caller} alt="Caller Icon" />
        </div>
      </div>
    </section>
  </>
}
