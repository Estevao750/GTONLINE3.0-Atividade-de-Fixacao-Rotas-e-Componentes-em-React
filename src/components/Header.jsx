import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={{ 
      padding: '15px 30px', 
      backgroundColor: '#242424', 
      color: '#fff', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <h2 style={{ margin: 0 }}>O Meu Projeto</h2>
      
      {}
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
        <Link to="/sobre" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        <Link to="/contato" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
      </nav>
    </header>
  )
}