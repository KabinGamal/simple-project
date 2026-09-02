import React from 'react'
import {Bookmark} from 'lucide-react'

const App = () => {
  return (
    <div className="parent">

      <div className="card">

        <div className="head">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-JRmMaGWuzwX7IuiE6BoVT9V4JvUuYa9gaMyc5pKpuA&s=10" alt="apple"></img>
          <h2>Saved <Bookmark /></h2>
        </div>
      </div>
    </div>
  )
}

export default App
