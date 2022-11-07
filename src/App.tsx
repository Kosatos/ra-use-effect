import React, { useState, useEffect } from 'react'
import styles from './App.module.css'

import { IUser } from './models'

import { getData } from './utils/getData'
import List from './components/use-effect/List'
import Details from './components/use-effect/Details'
import Data from './components/use-json-fetch/Data'

function App() {
  const [users, setUsers] = useState<IUser[]>([])
  const [activeUser, setaActiveUser] = useState<IUser | null>(null)

  useEffect(() => {
    getData(`${process.env.REACT_APP_USERS_URL}`).then((data) =>
      setUsers([...data])
    )
  }, [])

  const handlerShowDetails = (id: number) => {
    const user = users.find((u) => u.id === id)
    user && setaActiveUser(user)
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles['task-title']}>Use effect</h2>
      <hr />
      <div className={styles['use-effect']}>
        <List list={users} onShowDetails={handlerShowDetails}></List>
        {activeUser && <Details info={activeUser}></Details>}
      </div>

      <h2 className={styles['task-title']}>useJsonFetch</h2>
      <hr />
      <Data url='data'></Data>
      <Data url='error'></Data>
      <Data url='loading'></Data>
    </div>
  )
}

export default App
