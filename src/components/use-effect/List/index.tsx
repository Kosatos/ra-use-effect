import React from 'react'
import styles from './index.module.css'

import { IUser } from '../../../models'

interface ListProps {
  list: IUser[]
  onShowDetails(id: number): void
}

export default function List({ list, onShowDetails }: ListProps) {
  return (
    <ul className={styles.list}>
      {list.map((user) => (
        <li
          className={styles.list__item}
          key={user.id}
          onClick={() => onShowDetails(user.id)}
        >
          {user.name}
        </li>
      ))}
    </ul>
  )
}
