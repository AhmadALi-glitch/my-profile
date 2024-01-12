import PersonalPhotoUrl from "../assets/PersonalPhoto.jpg";
import "../css/PersonalPhoto.css";

export default function() { 

    return (
        <>
            <div className="xsm:w-32 xsm:h-full md:w-full md:h-60 relative bg-diagonal-pattern">
                <img src={PersonalPhotoUrl} className="xsm:w-28 xsm:h-28 xsm:left-2 xsm:top-2 sm:w-32 sm:h-32 sm:top-8 sm:left-3 md:top-7 md:left-5 md:w-60 md:h-60 absolute personal-photo-img rounded-2xl object-cover"/>
            </div>
        </>
    )

}