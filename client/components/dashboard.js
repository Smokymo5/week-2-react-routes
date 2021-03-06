import React from 'react'
import { Link } from 'react-router-dom'
import Head from './head'

const Dashboard = () => {
  return (
    <div>
      <Head title="Hello" />
      {/* <div className="flex items-center justify-center h-screen"> */}
      <div
        id="title"
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
      >
        Dashboard
      </div>
      <div>
        <Link to="/dashboard/profile/b32f67d5-107c-465b-b6af-ae8194b0e805"> Go To Profile </Link>
      </div>
      <div>
        <Link to="/dashboard/main"> Go To Main </Link>
      </div>
      {/* </div> */}
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
