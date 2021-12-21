import { FaChevronUp } from "react-icons/fa"

const ScrollToTopButton = ({ scrollToTop }) => {
    return (
        <div className="scroll-to-top-button" onClick={scrollToTop}>
            <FaChevronUp />
        </div>
    )
}

export default ScrollToTopButton
