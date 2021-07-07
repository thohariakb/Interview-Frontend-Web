import React from 'react'
import Sidebard from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CardQuestion1 from '../components/CardQuestion2';

const question = () => {
    return (
        <>
        <div className="auto-cols-auto">
            <div><Sidebard/></div>
            <div>
                <Navbar/>
                <CardQuestion1/>
            </div>
        </div>
        </>
    )
}

export default question
