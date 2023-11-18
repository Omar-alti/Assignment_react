import React from 'react'
import Post from './Posts'

function Searchbox() {
    return (
        <div className="search-box">
            <form>
                <div className="magnifying-glass"><i className="fa-regular fa-magnifying-glass"></i></div>
                <input id="searchbox" type="text" placeholder="Type to search..." />
            </form>

            <div className="recent">
                <h3>Recent Posts</h3>
                <div className="underline"></div>
                <Post title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020" /> 
                <Post title="Design Studios That Everyone Should Know About?" date="Jan 14, 2020" /> 
                <Post title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020" /> 
                <Post title="Figma On Figma: How We Built Our Website Design System" date="Jan 14, 2020" /> 
            </div>
            <div className="categories">
                <h3>Categories</h3>
                <div className="underline"></div>
                <p>Technology - <span>20 Posts</span></p>
                <p>Freelancing -  <span>07 Posts</span></p>
                <p>Writing -  <span>16 Posts</span></p>
                <p>Marketing -  <span>11 Posts</span></p>
                <p>Business -  <span>35 Posts</span></p>
                <p className="last">Education -  <span>14 Posts</span></p>
            </div>
        </div>
    )
}

export default Searchbox