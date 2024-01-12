import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram, faWhatsapp, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function() {
    return(
        <>
            <div className="flex gap-2">
                <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faFacebook} color="blue" />
                <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faTelegram} color="teal" />
                <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faWhatsapp} color="green" />
                <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faGithub} color="black" />
            </div>
        </>
    )
}