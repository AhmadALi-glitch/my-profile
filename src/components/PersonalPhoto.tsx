import PersonalPhotoUrl from "../assets/PersonalPhoto.jpg";
import "../css/PersonalPhoto.css";

export function PersonalPhoto() { 

    return (
        <>
            <div className="wrapper bg-diagonal-pattern w-full h-60 relative ">
                <img src={PersonalPhotoUrl} className="absolute top-7 left-5 md:w-60 md:h-60 w-52 h-52 personal-photo-img rounded-2xl object-cover"/>
            </div>
        </>
    )

}