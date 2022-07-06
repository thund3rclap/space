import React from 'react'
import painters from "../../json/paineters.json"
import ContentItem from './ContentItem'

export default function ContentWrapper() {
    return (
        <div className='content-area'>
            {painters.map(painter => {
                return <ContentItem key={painter.name} painter={painter}/>
            })}
        </div>
    )
}