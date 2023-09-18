import SkillCardList from "../components/SkillCardList"

export default function AcquireSkills () {

    return (
        <section className="acquire-skills">
            <h2>Begin Aquiring Your Skill in <span className="orange-text">Simple Steps</span></h2>
            <SkillCardList />
            <button className="btn-black">Request a call back</button>
        </section>
    )
}