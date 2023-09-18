import pin from '../assets/svg/Pin.svg';
import phone from '../assets/images/phone.png';

export default function BenefitsFrame() {
  return (
    <div className="frame">
      <div className="text">
        <h2>
          Top Benefits of choosing <span className="orange-text">1-on-1</span>
        </h2>
        <div className="benefits-list">
          {benefits.map((text, i) => (
            <p key={i}>
              <img src={pin} alt="📌" />
              {text}
            </p>
          ))}
        </div>
      </div>
      <div className="image">
        <div className="phone-wrapper">
          <img src={phone} alt="Mobile" />
        </div>
        <div className="text-box">
          <h4 className="orange-text">100+</h4>
          <p>Experts Connected to us to drive your success </p>
        </div>
      </div>
    </div>
  );
}

const benefits: string[] = [
  'Flexibility and Adaptability',
  'Individualized support and guidance',
  'Instant correction and reinforcement',
  'Better understanding and retention',
  'Focuses on specific needs and goals',
  'Active participation and interaction',
];
