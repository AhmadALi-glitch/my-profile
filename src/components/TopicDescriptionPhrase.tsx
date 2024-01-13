

export default function({ sectionsState }) {

    const phrases = [
        'I Love My Job',
        'I Work Hard',
        'I Do Read',
        'I Never Stop',
        'I\'ll Do what it takes'
    ];
    
    return(
        <>
            <div className='transition ease-in-out subpixel-antialiased xsm:text-2xl sm:text-5xl md:text-6xl text-5xl font-classic text-primary'>
                {phrases[sectionsState]}
            </div>
        </>
    )
}

