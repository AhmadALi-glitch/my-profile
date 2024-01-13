import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTelegram, faWhatsapp, faGithub, faDev, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function() {

    return(
        <>
            <div className="flex gap-2">

                <a href="https://www.facebook.com/profile.php?id=100056769549101" target="_blank">
                    <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faFacebook} color="blue" />
                </a>

                <a href="https://github.com/AhmadALi-glitch" target="_blank">
                    <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faGithub} color="black" />
                </a>

                <a href="https://dev.to/ahmadaliglitch" target="_blank">
                    <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faDev} color="black" />
                </a>

                <a href="https://www.linkedin.com/in/ahmad-ali-b09b9b2a5/" target="_blank">
                    <FontAwesomeIcon className="xsm:text-2xl sm:text-4xl" icon={faLinkedin} color="blue" />
                </a>

            </div>
        </>
    )
}