import CardList1 from "../components/CardList1";
import curve1 from '../assets/svg/curve1.svg'

export default function OurMission () {

    return (
      <section className="our-mission-section">
        <h2 className="orange-text">Our Mission</h2>
        <p>
          Our main goal is to provide excellent education through high-quality
          teaching. We keep track of your progress and provide real-world
          experiences to enrich your learning. We help you <span style={{fontWeight: 700}}>achieve your goals</span> with ease by customizing the course for you. We aim to help you learn essential skills without spending excessive time, ensuring your learning experience is efficient and
          effective
        </p>
        <h2>
          Why <span className="orange-text">Students Join</span> Us
        </h2>
        <CardList1 />
        <img src={curve1} alt="curve" className="curve" />
      </section>
    );
}