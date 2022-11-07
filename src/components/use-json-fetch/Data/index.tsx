import React from 'react'
import useJsonFetch from '../../../hooks/useJsonFetch'
import styles from './index.module.css'

interface DataProps {
  url: string
}

export default function Data({ url }: DataProps) {
  const [data, error, loading] = useJsonFetch(`http://localhost:7070/${url}`, {
    method: 'GET',
  })

  return (
    <div className={styles.response}>
      {loading ? (
        'Loading...'
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>{data && data.status}</div>
      )}
    </div>
  )
}
