import { Routes, Route, Link, Outlet } from 'react-router-dom'

function Header() {
  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/sobre">Sobre</Link> | {" "}
        <Link to="/contato">Contato</Link>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer style={{ marginTop: '20px', padding: '10px', borderTop: '1px solid #ccc', textAlign: 'center' }}>
      <p>© 2026 Meu Projeto React</p>
    </footer>
  )
}

function Layout() {
  return (
    <div>
      <Header />
      {}
      <main style={{ padding: '20px' }}>
        <Outlet />
      </main>
      
      <Footer />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Página Inicial 🏠</h1>
      <p>Bem-vindo ao meu novo projeto React!</p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>Sobre o Projeto 📖</h1>
      <p>Este é um projeto criado do zero usando Vite e React Router.</p>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contato ✉️</h1>
      <p>Fale conosco enviando um email para ola@projeto.com</p>
    </div>
  )
}

function App() {
  return (
    <Routes>
      {}
      <Route path="/" element={<Layout />}>
        {}
        <Route index element={<Home />} />
        {}
        <Route path="sobre" element={<About />} />
        <Route path="contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App