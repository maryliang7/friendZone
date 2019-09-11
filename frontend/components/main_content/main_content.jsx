import React from 'react';
import { Redirect } from 'react-router-dom';


const MainContent = ({ currentUser }) => {
  const display = currentUser ? (
    <div>
      {/* <NewsFeedContainer /> */}
    </div>
  ) : (
      <div>
        <Redirect to='/signup' />
      </div>
    )
  return (
    <div>{display}</div>
  )
}

export default MainContent