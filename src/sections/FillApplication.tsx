import bgBubble from '../assets/svg/bgBubble.svg'
import person from '../assets/images/person3.png'

export default function FillApplication () {

    return (
      <section className="fill-application">
        <div className="frame">
          <div className="image">
            <img src={bgBubble} alt="" />
            <img src={person} alt="person" className='person'/>
          </div>
          <div className="text">
            <h2>Want to Become a <span className="orange-text">Teaching Friend?</span></h2>
            <p>
              Are you interested in becoming a Teaching Friend? If you have a
              passion for teaching and enjoy providing personalized attention
              and support to students, this could be a fulfilling opportunity
              for you. As a Teaching Friend, you'll have the chance to make a
              direct impact on individual learners' lives, tailoring your
              instruction to their unique needs and learning styles. Join our
              team of dedicated educators and help students achieve their goals while fostering a deeper understanding and skill development. Take the first step towards becoming a valued 1-on-1 Teaching Friend and make a positive difference in the lives of those you teach.
            </p>
            <button className="btn-black">Fill Application</button>
          </div>
        </div>
      </section>
    );
}