import PersonalPhotoUrl from "../assets/PersonalPhoto.png";

export default function() { 

    return (
        <>
            <div className="xsm:w-32 xsm:h-full md:w-full md:h-60 relative bg-diagonal-pattern">
                <img src={PersonalPhotoUrl} style={{filter:"grayscale(1)", outlineOffset: '1px' , outline: '2px solid #eee'}} className="shadow-flat xsm:w-28 xsm:h-28 xsm:left-3 xsm:top-8 sm:w-32 sm:h-32 sm:top-8 sm:left-3 md:top-7 md:left-5 md:w-60 md:h-60 absolute personal-photo-img rounded-2xl object-cover"/>
            </div>
        </>
    )

}
