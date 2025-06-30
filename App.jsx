import './App.css'
import { useState } from 'react'
import { Menu, X, Mail, Phone, MapPin, Award, Users, BookOpen, Lightbulb, ChevronRight, Star } from 'lucide-react'
import nizaelPhoto from './assets/nizael-photo.png'
import gestaoEducacional from './assets/gestao_educacional.webp'
import tecnologiaEducacao from './assets/tecnologia_educacao.png'
import inovacaoEducacional from './assets/inovacao_educacional.jpg'
import liderancaEducacional from './assets/lideranca_educacional.png'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold text-blue-900">Nizael Almeida</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre')} className="text-gray-700 hover:text-blue-900 transition-colors">Sobre</button>
              <button onClick={() => scrollToSection('experiencia')} className="text-gray-700 hover:text-blue-900 transition-colors">Experiência</button>
              <button onClick={() => scrollToSection('projetos')} className="text-gray-700 hover:text-blue-900 transition-colors">Projetos</button>
              <button onClick={() => scrollToSection('palestras')} className="text-gray-700 hover:text-blue-900 transition-colors">Palestras</button>
              <button onClick={() => scrollToSection('contato')} className="text-gray-700 hover:text-blue-900 transition-colors">Contato</button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-900">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('sobre')} className="block px-3 py-2 text-gray-700 hover:text-blue-900 w-full text-left">Sobre</button>
              <button onClick={() => scrollToSection('experiencia')} className="block px-3 py-2 text-gray-700 hover:text-blue-900 w-full text-left">Experiência</button>
              <button onClick={() => scrollToSection('projetos')} className="block px-3 py-2 text-gray-700 hover:text-blue-900 w-full text-left">Projetos</button>
              <button onClick={() => scrollToSection('palestras')} className="block px-3 py-2 text-gray-700 hover:text-blue-900 w-full text-left">Palestras</button>
              <button onClick={() => scrollToSection('contato')} className="block px-3 py-2 text-gray-700 hover:text-blue-900 w-full text-left">Contato</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Nizael Flôres de <span className="text-blue-900">Almeida</span>
              </h1>
              <p className="text-xl text-gray-600 mb-4">
                Especialista em Educação Pública | Palestrante | Ex-Secretário Municipal de Educação
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Transformando a educação pública através de inovação, liderança e projetos reconhecidos pelo MEC e UNESCO.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  Solicitar Palestra
                  <ChevronRight className="ml-2" size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="border border-blue-900 text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Conheça Minha Trajetória
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src={nizaelPhoto} 
                  alt="Nizael Flôres de Almeida" 
                  className="w-80 h-80 object-cover rounded-full shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full">
                  <Award size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Sobre Mim</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Educador e gestor público com mais de 10 anos de experiência na educação pública, 
              com trajetória premiada na gestão pública e projetos reconhecidos pelo MEC e UNESCO.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Liderança Educacional</h3>
              <p className="text-gray-700">
                Experiência comprovada na liderança de equipes pedagógicas, administrativas e técnicas 
                em todas as etapas do processo educacional.
              </p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inovação Educacional</h3>
              <p className="text-gray-700">
                Desenvolvimento e implementação de projetos inovadores com foco em tecnologia, 
                melhoria da aprendizagem e valorização dos territórios educativos.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Formação Sólida</h3>
              <p className="text-gray-700">
                Especialização em Direito Educacional e Gestão Escolar, com licenciaturas em 
                Letras e Artes Cênicas, unindo teoria e prática educacional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experiência Section */}
      <section id="experiencia" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Experiência Profissional</h2>
            <p className="text-xl text-gray-600">
              Uma trajetória de sucesso na gestão pública educacional
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Secretário Municipal de Educação</h3>
                  <p className="text-lg text-blue-900 font-medium">Prefeitura de Ribas do Rio Pardo/MS</p>
                </div>
                <span className="text-gray-600 font-medium">Jan/2023 - Dez/2024</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Liderança de equipes pedagógicas, administrativas e técnicas</li>
                <li>• Implementação de políticas públicas educacionais inovadoras</li>
                <li>• Gestão de projetos de melhoria da aprendizagem e infraestrutura</li>
                <li>• Conquista de reconhecimentos nacionais do MEC</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">Professor do Ensino Fundamental II</h3>
                  <p className="text-lg text-blue-900 font-medium">Prefeitura de Campo Grande/MS</p>
                </div>
                <span className="text-gray-600 font-medium">Jan/2018 - Dez/2020</span>
              </div>
              <ul className="text-gray-700 space-y-2">
                <li>• Práticas pedagógicas alinhadas à BNCC</li>
                <li>• Desenvolvimento da leitura, escrita e pensamento crítico</li>
                <li>• Fortalecimento do vínculo escola-família-comunidade</li>
                <li>• Vencedor do Prêmio Professores do Brasil 2018</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Projetos Inovadores</h2>
            <p className="text-xl text-gray-600">
              Iniciativas que transformaram a educação pública e ganharam reconhecimento nacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <img src={tecnologiaEducacao} alt="Tecnologia na Educação" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Projeto Olho Mágico</h3>
              <p className="text-gray-700 mb-4">
                Utilização de inteligência artificial e georreferenciamento para mapear rotas, 
                veículos e estudantes da zona rural, promovendo maior segurança e eficiência 
                no transporte escolar.
              </p>
              <div className="flex items-center text-blue-900 font-medium">
                <Award className="mr-2" size={20} />
                Referência em inovação logística
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
              <img src={inovacaoEducacional} alt="Inovação Educacional" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">TEAR - Territórios Educativos</h3>
              <p className="text-gray-700 mb-4">
                Política pública com foco na valorização do território, saberes locais, cultura 
                e participação comunitária. Reconhecida pelo MEC e apresentada em eventos 
                internacionais.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                <Star className="mr-2" size={20} />
                Reconhecimento MEC e UNESCO
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl">
              <img src={liderancaEducacional} alt="Liderança Educacional" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Conecta Ribas</h3>
              <p className="text-gray-700 mb-4">
                Evento anual de formação e valorização que se tornou referência regional, 
                reunindo secretários de educação, autoridades e educadores de diversos municípios.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                <Users className="mr-2" size={20} />
                Referência regional em formação
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-xl">
              <img src={gestaoEducacional} alt="Gestão Educacional" className="w-full h-48 object-cover rounded-lg mb-6" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Realidade Virtual na Educação</h3>
              <p className="text-gray-700 mb-4">
                Implementação de ações inovadoras na Educação Especial, incluindo capacitação 
                de professores no uso de realidade virtual para apoiar estudantes com autismo 
                e outras deficiências.
              </p>
              <div className="flex items-center text-orange-600 font-medium">
                <Lightbulb className="mr-2" size={20} />
                Inovação em Educação Especial
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reconhecimentos */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Reconhecimentos</h2>
            <p className="text-xl text-blue-100">
              Conquistas que validam o compromisso com a excelência educacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <Award className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Selo Petronilha Beatriz</h3>
              <p className="text-blue-100">Reconhecimento MEC 2024 por políticas afirmativas e educação étnico-racial</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <Award className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Selo Ouro Alfabetização</h3>
              <p className="text-blue-100">Compromisso Nacional pela Alfabetização na Idade Certa - MEC 2024</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <Award className="mx-auto mb-4 text-yellow-400" size={48} />
              <h3 className="text-xl font-semibold mb-2">Prêmio Territórios</h3>
              <p className="text-blue-100">Instituto Tomie Ohtake 2023 - Trabalho com EJA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Palestras Section */}
      <section id="palestras" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Palestras e Serviços</h2>
            <p className="text-xl text-gray-600">
              Compartilhando conhecimento e inspirando transformações na educação pública
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Liderar a Si para Inspirar Outros
              </h3>
              <p className="text-gray-700 mb-4">
                Uma jornada breve de autoconhecimento criativo e liderança com propósito, 
                focada no desenvolvimento de competências de liderança educacional.
              </p>
              <div className="text-blue-900 font-medium">Mentoria</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Histórias que Transformam
              </h3>
              <p className="text-gray-700 mb-4">
                Autocuidado e liberdade para educadores. Uma palestra que aborda o bem-estar 
                e a valorização profissional dos educadores.
              </p>
              <div className="text-green-600 font-medium">Palestra • 60 minutos</div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Lightbulb className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Territórios Educativos: o Futuro é Ancestral
              </h3>
              <p className="text-gray-700 mb-4">
                Explorando a valorização dos saberes locais, cultura e participação comunitária 
                na construção de uma educação mais contextualizada.
              </p>
              <div className="text-purple-600 font-medium">Palestra</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 mb-6">
              Modalidades: Presencial e Online • Valores sob consulta
            </p>
            <button 
              onClick={() => scrollToSection('contato')}
              className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors inline-flex items-center"
            >
              Solicitar Orçamento
              <ChevronRight className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-600">
              Vamos conversar sobre como posso contribuir com seu evento ou projeto educacional
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Localização</h4>
                    <p className="text-gray-600">Mato Grosso do Sul, Brasil</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">E-mail</h4>
                    <p className="text-gray-600">Disponível sob consulta</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-blue-900 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Telefone</h4>
                    <p className="text-gray-600">Disponível sob consulta</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">Áreas de Atuação</h4>
                <ul className="text-gray-700 space-y-2">
                  <li>• Gestão Educacional</li>
                  <li>• Políticas Públicas Educacionais</li>
                  <li>• Inovação e Tecnologia na Educação</li>
                  <li>• Liderança e Desenvolvimento de Equipes</li>
                  <li>• Educação Inclusiva e Especial</li>
                  <li>• Territórios Educativos</li>
                </ul>
              </div>
            </div>
            
            <div>
              <form className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Solicite uma Proposta</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="instituicao" className="block text-sm font-medium text-gray-700 mb-2">
                      Instituição/Organização
                    </label>
                    <input
                      type="text"
                      id="instituicao"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nome da instituição"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="servico" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Serviço
                    </label>
                    <select
                      id="servico"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selecione o tipo de serviço</option>
                      <option value="palestra">Palestra</option>
                      <option value="mentoria">Mentoria</option>
                      <option value="consultoria">Consultoria</option>
                      <option value="formacao">Formação/Treinamento</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Descreva seu evento, necessidades e expectativas..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-medium"
                  >
                    Enviar Solicitação
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Nizael Flôres de Almeida</h3>
            <p className="text-gray-400 mb-6">
              Especialista em Educação Pública | Palestrante | Ex-Secretário Municipal de Educação
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 Nizael Flôres de Almeida. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

