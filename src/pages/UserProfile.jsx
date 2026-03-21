import { useParams, Link } from 'react-router-dom'

export default function UserProfile() {
  const { id } = useParams()
  return (
    <div>
      <h1>Perfil do Usuário 👤</h1>
      {}
      <p>Você está visualizando o perfil do usuário com o ID: <strong>{id}</strong></p>
      <br />
      <Link to="/">Voltar para Home</Link>
    </div>
  )
}