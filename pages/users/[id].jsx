import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const UserProfile = () => {
  const router = useRouter()

  useEffect(() => {
    console.log('Renderizando')
  }, [])
  return <div>User profile + {router.query.id}</div>
}

export default UserProfile
