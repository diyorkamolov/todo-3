import React, { useState } from 'react'

function App() {
  const [currentId, setCurrentId] = useState(null);
  return (
    <div>
      <PostForm currentId ={currentId} setCurrentId={setCurrentId} />
      <PostList setCurrentId={setCurrentId} />
    </div>
  )
}

export default App
