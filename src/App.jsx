import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1>Página Inicial 🏠</h1>
      <p>Bem-vindo ao meu novo projeto React!</p>
      <nav>
        {}
        <Link to="/sobre">Ir para Sobre</Link> | {" "}
        <Link to="/contato">Ir para Contato</Link>
      </nav>
    </div>
  )
}

function About() {
  return (
    <div>
      <h1>Sobre o Projeto 📖</h1>
      <p>Este é um projeto criado do zero usando Vite e React Router.</p>
      <nav>
        <Link to="/">Voltar para Home</Link> | {" "}
        <Link to="/contato">Ir para Contato</Link>
      </nav>
    </div>
  )
}

function Contact() {
  return (
    <div>
      <h1>Contato ✉️</h1>
      <p>Fale conosco enviando um email para ola@projeto.com</p>
      <nav>
        <Link to="/">Voltar para Home</Link> | {" "}
        <Link to="/sobre">Ir para Sobre</Link>
      </nav>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/contato" element={<Contact />} />
    </Routes>
  )
}

export default App