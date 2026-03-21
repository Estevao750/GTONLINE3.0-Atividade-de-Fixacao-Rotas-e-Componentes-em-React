import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Footer() {
  return (
    <footer style={{ padding: '15px', backgroundColor: '#242424', color: '#fff', textAlign: 'center' }}>
      <p>© 2026 O Meu Projeto React</p>
    </footer>
  )
}

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {}
      <Header />
      
      {}
      <main style={{ flex: 1, padding: '40px' }}>
        <Suspense fallback={<h2 style={{ color: '#646cff' }}>A carregar a página... ⏳</h2>}>
          <Outlet />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  )
}