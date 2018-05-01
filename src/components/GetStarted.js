import React from 'react'
import { Link, Route } from "react-router-dom";

const GetStarted = ({match}) => {
  return (
    <div className ='testing'>
      {" "}
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {" "}
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
    </div>
  )
}

export default GetStarted