import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página não encontrada 🚨</h1>
      <p>Ops! Parece que o link que você acessou não existe ou foi movido.</p>
      {}
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Voltar para a Página Inicial
      </Link>
    </div>
  )
}