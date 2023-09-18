import { AiOutlineDoubleRight } from 'react-icons/ai'
import CourseList from '../components/CourseList'

export default function CourseSection () {

    return (
        <section className="courses">
            <div className="course-list-1">
                <h2>Popular Courses</h2>
                <CourseList />
                <button className="btn btn-orange btn-explore">Explore All <AiOutlineDoubleRight /></button>
            </div>
            <div className="course-list-2">
                <h2>Popular Placement Programs</h2>
                <CourseList />
                <button className="btn btn-orange btn-explore">Explore All  <AiOutlineDoubleRight /></button>
            </div>
            <div className="circle-5 circle"></div>
            <div className="circle-6 circle"></div>
        </section>
    )
}