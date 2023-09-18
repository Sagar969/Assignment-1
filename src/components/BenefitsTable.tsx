import cross from '../assets/svg/cross.svg';
import tick from '../assets/svg/tick.svg';

export default function BenefitsTable() {
  return (
    <table className="benefits-table">
      <thead>
        <tr>
          <th></th>
          <th>Video Course</th>
          <th>Bootcamps</th>
          <th>1-on-1 Training</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Real Work Experience</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
        <tr className="orange">
          <td>Live Sessions and Mentorships</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
        <tr>
          <td>Career Guidance</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
        <tr className="orange">
          <td>True Project Based Learning</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
        <tr>
          <td>Internship With Top Companies</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
        <tr className="orange">
          <td>Job Ready Portfolio</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
        <tr>
          <td>Placement Guarantee</td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={cross} alt="❌" />
          </td>
          <td>
            <img src={tick} alt="✔️" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}
