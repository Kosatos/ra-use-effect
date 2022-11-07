import { useEffect, useState } from 'react'

export default function useJsonFetch(url: string, opts: object = {}) {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  async function getData(url: string) {
    setLoading(true)
    try {
      const response = await fetch(url, opts)
      if (response.ok) {
        const json = await response.json()
        setData(json)
        setLoading(false)
      } else {
        throw new Error('RESPONSE ERR')
      }
    } catch (err) {
      setError('Response error')
      setLoading(false)
    }
  }

  useEffect(() => {
    getData(url)
  }, [])

  return [data, error, loading]
}
