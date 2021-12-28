import TechCard from "../cards/TechCard";

const TechList = ({ list }) => {
    return (
        list.map((item, index) => <TechCard tech={ item } key={ index }/>)
    )
}

export default TechList
