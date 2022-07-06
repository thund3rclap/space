import React from 'react'

export default function ContentItem(props) {

    // For animation
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add("fade-in-right", `${props.painter.backgroundImg}`);
                }
            })
        })
        observer.observe(document.querySelector(`#${props.painter.name}`))
    })
    return (
      <div id={props.painter.name} className="page-single d-flex align-items-center">
        <h4 className="painter-text">{props.painter.name}</h4>
      </div>
    );
}