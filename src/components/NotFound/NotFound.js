import React from 'react'
import RedirectToPage from '../../utils/redirection'
const NotFound = () => {
  return (
    <div>Requested page not found
        <p>You will be redirected to Home page</p>
        {RedirectToPage("Home")}
    </div>
  )
}

export default NotFound