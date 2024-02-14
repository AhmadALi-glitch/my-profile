
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

export default function() {
    return (
        <>
            <h1 className="text-secondary font-handwritten xsm:text-4xl sm:text-5xl md:text-8xl">Readings:</h1>
            <div className="text-secondary font-handwritten xsm:text-2xl sm:text-3xl md:text-4xl md:pt-5">
                I Love reading books A lot .. specially when the writer share his work journey with the reader .. my favorite is <span className="underline">`The Robert C. Martin Clean Coder`</span> .. it is a LEGEND
                <br />
                <div className="items-center gap-4 pt-6">
                    Currently reading : 
                    <a className="underline text-primary gap-3 flex flex-nowrap items-center" href="https://www.amazon.com/Non-Designers-Design-Book-4th/dp/0133966151">The Non-Designer's Design Book  <FontAwesomeIcon size="xs" icon={faLink} /></a>
                </div>
            </div>
        </>
    )
}