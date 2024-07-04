import { useUsers } from '../../store/users'

const About: React.FC = () => {
  const users = useUsers((state) => state.users)
  const addUser = useUsers((state) => state.addUser)

  return (
    <section>
      <button onClick={addUser}>Add users</button>
      <ul>
        {users.map((user: string) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </section>
  )
}

export default About
