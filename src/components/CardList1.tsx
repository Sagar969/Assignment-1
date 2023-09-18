import image1 from '../assets/images/ourMission/image1.png'
import image2 from '../assets/images/ourMission/image2.png'
import image3 from '../assets/images/ourMission/image3.png'
import image4 from '../assets/images/ourMission/image4.png'
import image5 from '../assets/images/ourMission/image5.png'
import image6 from '../assets/images/ourMission/image6.png'
import icon1 from '../assets/icons/ourMission/icon1.png'
import icon2 from '../assets/icons/ourMission/icon2.png'
import icon3 from '../assets/icons/ourMission/icon3.png'
import icon4 from '../assets/icons/ourMission/icon4.png'
import icon5 from '../assets/icons/ourMission/icon5.png'
import icon6 from '../assets/icons/ourMission/icon6.png'


type ContentType = {
    [key: string]: string
}

export default function CardList1 () {

    return (
        <div className='card-list'>
            {Array.from({ length: 6 }).map((_, i)  => <Card key={i} content={data[i]} />)}
        </div>
    )
}

function Card ({ content }: { content: ContentType }) {

    return (
        <div className="card">
            <div className="upper">
                <img src={content.img} alt="" />
            </div>
            <div className="lower">
                <img src={content.icon} alt="" />
                <h4>{content.title} <span className="orange-text">{content.orangeTitle}</span></h4>
                <p>{content.description}</p>
            </div>
        </div>
    )
}

const data: ContentType[] = [
  {
    img: image1,
    icon: icon1,
    title: '1 on 1',
    orangeTitle: 'Teaching',
    description: 'Teachers adapt their instructional strategies.',
  },
  {
    img: image2,
    icon: icon2,
    title: 'Efficient Use of',
    orangeTitle: 'Time',
    description:
      'Students value the optimized learning process that maximizes their time.',
  },
  {
    img: image3,
    icon: icon3,
    title: 'Customized',
    orangeTitle: 'Course Plan',
    description: 'Our platform offers customized course plans.',
  },
  {
    img: image4,
    icon: icon4,
    title: 'Professional',
    orangeTitle: 'Profile',
    description:
      'Our courses provide valuable insights and practical knowledge.',
  },
  {
    img: image5,
    icon: icon5,
    title: 'Progress',
    orangeTitle: 'Tracking',
    description:
      "We track and monitor students' progress, providing valuable feedback.",
  },
  {
    img: image6,
    icon: icon6,
    title: 'Personlized',
    orangeTitle: 'Attention',
    description: 'Our dedicated instructors provide personalized attention.',
  },
];