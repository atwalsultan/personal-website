import TechCard from "../cards/TechCard";

const TechList = ({ project }) => {
    return (
        project.tech.map((item, index) => <TechCard tech={ item } key={ index }/>)
    )
}

export default TechList
