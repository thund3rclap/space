import React from 'react'

export default function Subheader () {

    // For animation
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("fade-in-text");
                }
            })
        })
        observer.observe(document.querySelector(".subheader-area"))
    })

    return (
        <div className='subheader-area'>
            <div className="page-single d-flex align-items-center justify-center flex-column">
                <div className="subheader-title d-flex">
                    <h4>Lorem Ipsum</h4>
                </div>
                <div className="subheader-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hendrerit urna ut enim venenatis imperdiet. Duis finibus nisi eget orci tempus mattis. Aliquam ultrices metus id mauris fringilla, id dignissim ipsum feugiat. Morbi vitae lobortis turpis, sed tempus nunc. Curabitur aliquam, lacus nec rutrum ultricies, massa lectus fermentum velit, eget facilisis lectus ipsum vel diam.
                </div>
            </div>
        </div>
    )
}