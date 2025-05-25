import React from 'react'

export default function LoginButton() {
  return (
    <div className='inline p-6 hover:bg-slate-300 active:bg-slate-400'>
      <a href='http://localhost:8080/oauth2/authorization/google'>Sign in with Google</a>
    </div>
  )
}
