import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">

      <div className="card">

        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JRmMaGWuzwX7IuiE6BoVT9V4JvUuYa9gaMyc5pKpuA&s=10" alt="apple"></img>
          <button>Saved <Bookmark /></button>
        </div>

        <div className="body">
          <h3>Apple<span>5days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div>
            <h4>Part-Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        
        <div className="footer">
          <div>
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  )
}

export default App
