import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './index.module.css'

import { IUser } from '../../../models'
import { IUserDetails } from '../../../models'
import { getData } from '../../../utils/getData'

import Loader from '../../common/Loader'

interface DetailsProps {
  info: IUser | null
}

export default function Details({ info }: DetailsProps) {
  const [userDetails, setUserDetails] = useState<IUserDetails | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const fetchDetails = async () => {
    setIsLoading(true)
    try {
      const data = await getData(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info?.id}.json`
      )
      setUserDetails(data)
      setIsLoading(false)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (!info) return
    fetchDetails()
  }, [info])

  if (!userDetails) return null
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.details}>
          <img src={userDetails.avatar} alt={userDetails.name} />
          <div className={styles.details__body}>
            <h4 className={styles.details__name}>{userDetails.name}</h4>
            <ul>
              {Object.entries(userDetails.details).map(([key, value], idx) => (
                <li className={styles.details__detail} key={idx}>{`${
                  key.charAt(0).toUpperCase() + key.slice(1)
                }: ${value}`}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
