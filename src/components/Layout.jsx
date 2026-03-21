import { Suspense } from 'react'
import { Outlet, Link } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '15px', backgroundColor: '#333', color: '#fff' }}>
      <h2>Meu App Profissional</h2>
    </header>
  )
}

function Sidebar() {
  return (
    <aside style={{ width: '200px', padding: '20px', backgroundColor: '#f4f4f4', borderRight: '1px solid #ccc' }}>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/sobre">📖 Sobre</Link>
        <Link to="/contato">✉️ Contato</Link>
        <hr />
        {}
        <Link to="/user/777">👤 Perfil do Usuário 777</Link>
        <Link to="/user/joaosilva">👤 Perfil do João</Link>
        <Link to="/caminho-aleatorio">🚨 Testar Erro 404</Link>
      </nav>
    </aside>
  )
}

function Footer() {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#333', color: '#fff', textAlign: 'center' }}>
      <p>© 2026 Meu Projeto React</p>
    </footer>
  )
}

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      {}
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        
        <main style={{ flex: 1, padding: '30px' }}>
          {}
          {}
          <Suspense fallback={<h2 style={{ color: 'blue' }}>Carregando página... ⏳</h2>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
      
      <Footer />
    </div>
  )
}