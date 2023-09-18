import star from '../assets/svg/star.svg'
import dots from '../assets/svg/dots.svg'
import monitor from '../assets/icons/courses/monitor.png'
import reactIcon from '../assets/icons/courses/reactIcon.png'
import htmlIcon from '../assets/icons/courses/htmlIcon.png';
import cssIcon from '../assets/icons/courses/cssIcon.png';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useRef, useState } from 'react';

type contentType = {
    publishedTime: string,
    title: string,
    rating: number,
    purchases: number,
    category: string
}

// card carousel
export default function CourseList () {
    const [cards, setCards] = useState<NodeListOf<Element>>([])
    const courseListRef = useRef<HTMLDivElement>(null)

    const handleLeftSwipe = () => {
        swipe('left', cards)
    }
    const handleRightSwipe = () => {
        swipe('right', cards)
    }

    useEffect(() => {
        const courses = courseListRef.current?.querySelectorAll('.card')
        if(courses) setCards(courses)
    }, [])

    return (
        <div className="course-list" ref={courseListRef}>
            <button className="btn-left btn-black btn-scroll" onClick={handleLeftSwipe}><AiOutlineLeft /></button>
            {Array.from({ length:5 }).map((_, i) => <Card key={i} content={data[0]} num={i} cards ={cards} setCards={setCards} />)}
            <button className="btn-right btn-black btn-scroll" onClick={handleRightSwipe}><AiOutlineRight /></button>
        </div>
    )
}

type CardPropsType = {
  content: contentType;
  num: number;
  cards: NodeListOf<Element>;
  setCards: (newState: NodeListOf<Element>) => void;
};

// Card Component
function Card ({ content, num, cards, setCards }: CardPropsType) {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if(cardRef.current) setCards([...cards, cardRef.current])
        console.log(num)
    }, [])
    
    return (
        <div className="card" data-course={num} ref={cardRef}>
            <div className="upper">
                <div className="monitor-wrapper">
                    <img src={monitor} alt="Monitor" />
                </div>
                <div className="technologies">
                    <div className="icon-wrapper">
                        <img src={reactIcon} alt="React" />
                    </div>
                    <div className="icon-wrapper">
                        <img src={cssIcon} alt="CSS" />
                    </div>
                    <div className="icon-wrapper">
                        <img src={htmlIcon} alt="HTML" />
                    </div>
                </div>
            </div>
            <div className="lower">
                <p className='sm'>{content.publishedTime}</p>
                <h4>{content.title}</h4>
                <div className='text-hz'>
                    <p className='ratings'><img src={star} alt="⭐" />{content.rating}</p>
                    <p>{content.purchases} Purchases</p>
                </div>
                <p className='sm'>{content.category}</p>
                <div className='options'>
                    <img src={dots} alt="..." />
                    <button className="btn-know-more btn btn-black">Know More</button>
                </div>
            </div>
        </div>
    )
}

const data: contentType[] = [
    {
        publishedTime: '9 weeks',
        title: 'Web Development',
        rating: 4.2,
        purchases: 2176,
        category: 'CSE and IT Field'
    }
]

// function to swipe cards in any direction
function swipe (dir: 'left' | 'right', cards: NodeListOf<Element>) {
    console.log(dir)
  if (dir === 'left') {
    cards.forEach((card) => {
        const item = card as HTMLElement
      const dataItem = Number(item.dataset.course);
      if (dataItem <= 0) item.dataset.course = '4';
      else item.dataset.course = (dataItem - 1).toString();
    });
  } else {
    cards.forEach((card) => {
        const item = card as HTMLDivElement
      const dataItem = Number(item.dataset.course);
      console.log(item, dataItem)
      if (dataItem >= 4) item.dataset.course = '0';
      else item.dataset.course = (dataItem + 1).toString();
    });
  }
};