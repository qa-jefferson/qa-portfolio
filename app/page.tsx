"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircleMore,
  Bug,
  TestTube,
  Code,
  Database,
  Globe,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { interval } from "date-fns";

export default function QAPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarParaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const numero = "5554999894639";
    const texto = `Olá, me chamo ${nome}. ${mensagem}`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    async function animate() {
      if (typeof window !== "undefined") {
        const ScrollReveal = (await import("scrollreveal")).default;

        const sr = ScrollReveal({
          distance: "50px",
          duration: 1000,
          easing: "ease-out",
          origin: "bottom",
          reset: false,
          interval: 100,
        });

        sr.reveal(".reveal-fade", { opacity: 0 });
        sr.reveal(".reveal-left", { origin: "left", opacity: 0 });
        sr.reveal(".reveal-right", { origin: "right", opacity: 0 });
        sr.reveal(".reveal-top", { origin: "top", opacity: 0 });
      }
    }

    animate();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "hero",
        "sobre",
        "experiencia",
        "tecnologias",
        "projetos",
        "contato",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const technologies = [
    { name: "Cypress", icon: Globe },
    { name: "Selenium", icon: Globe },
    { name: "Postman", icon: Globe },
    { name: "SQL", icon: Database },
    { name: "Git", icon: Code },
    { name: "Zephyr Scale", icon: Bug },
    { name: "Appium", icon: TestTube },
    { name: "Jest", icon: TestTube },
    { name: "PHP", icon: Code },
    { name: "JavaScript", icon: Code },
  ];

  const experiences = [
    {
      company: "Tomticket",
      position: "Analista de Qualidade de Software Pleno",
      period: "2024 - Presente",
      responsibilities: [
        "Responsável por estruturar e iniciar a área de Qualidade de Software na empresa",
        "Elaboração de planos de teste, definição de estratégias e construção de testes manuais e automatizados",
        "Execução de testes funcionais, exploratórios e de API, garantindo a qualidade end-to-end do produto",
        "Testes de integrações com soluções externas como Twilio, Webhooks e mensageria",
        "Validação de dados em banco, análise de logs e investigação de falhas técnicas",
        "Abertura e acompanhamento de bugs com comunicação clara entre times de produto e desenvolvimento",
        "Mentoria de QA Júnior com foco em evolução técnica e comportamental",
        "Proposição e implementação de melhorias nos processos, ferramentas e cultura de qualidade",
      ],
    },
    {
      company: "Nubank",
      position: "Analista de Qualidade de Software",
      period: "2022 - 2023",
      responsibilities: [
        "Implementação de processos de qualidade desde o início do desenvolvimento",
        "Elaboração de planos de teste, criação de casos, cenários e relatórios rastreáveis",
        "Execução de testes manuais para aplicações web",
        "Desenvolvimento de scripts de automação de testes, ampliando a cobertura e eficiência",
        "Reporte detalhado de bugs com passo a passo, logs e evidências",
        "Atuação colaborativa com squads para identificação de riscos e melhoria contínua",
        "Participação em refinamentos técnicos e definição de critérios de aceitação",
      ],
    },
    {
      company: "Olivia AI",
      position: "QA Tester",
      period: "2021 - 2022",
      responsibilities: [
        "Desenvolvimento e execução de testes funcionais mobile",
        "Elaboração de planos de teste, construção de casos e geração de relatórios",
        "Identificação, documentação e acompanhamento de bugs junto aos times de desenvolvimento",
        "Apoio na definição de critérios de aceitação e validação de requisitos",
        "Testes manuais focados em UI e experiência do usuário, com foco em usabilidade",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <svg className="w-full h-full opacity-5" viewBox="0 0 100 100">
            <defs>
              <pattern
                id="grid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 10 0 L 0 0 0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bug className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                QA Engineer
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "hero", label: "Início" },
                { id: "sobre", label: "Sobre" },
                { id: "experiencia", label: "Experiência" },
                { id: "tecnologias", label: "Tecnologias" },
                { id: "projetos", label: "Projetos" },
                { id: "contato", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id
                      ? "text-cyan-400"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
              {[
                { id: "hero", label: "Início" },
                { id: "sobre", label: "Sobre" },
                { id: "experiencia", label: "Experiência" },
                { id: "tecnologias", label: "Tecnologias" },
                { id: "projetos", label: "Contato" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-20 reveal-fade"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              Oi, me chamo Jefferson
            </h1>
            <h2 className="text-2xl md:text-2xl font-semibold mb-6 text-gray-300">
              Atuo há 4 anos na área de qualidade de software com foco em
              garantir qualidade em todas as etapas do ciclo de desenvolvimento
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Especialista em garantir a excelência de produtos digitais (web e
              mobile) através de testes automatizados, estratégias de qualidade
              e melhores práticas de desenvolvimento.
            </p>
            <Button
              onClick={() => scrollToSection("contato")}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Entrar em contato
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full mt-6 md:w-1/3 flex justify-center">
                <div className="reveal-left relative w-80 h-70 mx-auto md:mx-0 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-sm opacity-75"></div>
                  <Image
                    src="/profile.png"
                    alt="Jefferson Borges - QA Engineer"
                    width={320}
                    height={320}
                    className="relative rounded-full object-cover border-4 border-gray-800"
                  />
                </div>
              </div>
              <div className="max-w-5xl w-full reveal-right">
                <p className="text-lg text-gray-300 mb-4">
                  Sou um profissional de Qualidade de Software com 4 anos de
                  experiência, atuando com testes manuais e automatizados,
                  validação de aplicações web e mobile, análise de requisitos e
                  definição de critérios de aceitação. Tenho foco em entregar
                  produtos confiáveis, eficientes e com ótima experiência para o
                  usuário.
                </p>
                <p className="text-lg text-gray-300 mb-4">
                  Já atuei como ponto focal de QA em empresas como Nubank,
                  Olivia AI e Tomticket. Tenho experiência em implementar áreas
                  de qualidade do zero, estruturando processos, ferramentas e
                  fluxos que elevaram a maturidade dos times.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Atualmente, também atuo como mentor de uma profissional QA
                  Júnior, apoiando seu desenvolvimento técnico e comportamental.
                  Acredito na importância de disseminar a cultura de qualidade
                  desde o início do desenvolvimento e busco incentivar boas
                  práticas no time.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    Atuação ponta a ponta
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                  >
                    Automação de Testes
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    Mentoria
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-20 bg-slate-900/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="reveal-fade text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experiência Profissional
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card
                  key={index}
                  className="reveal-fade bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-cyan-400">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-lg text-purple-300 font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="border-cyan-500/50 text-cyan-300 mt-2 md:mt-0"
                      >
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start space-x-2 text-gray-300"
                        >
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="tecnologias" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="reveal-fade text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tecnologias & Ferramentas
            </h2>
            <div className="reveal-fade grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => {
                const IconComponent = tech.icon;
                return (
                  <Card
                    key={index}
                    className="reveal-fade bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <CardContent className="p-6 text-center">
                      <IconComponent className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-purple-400 transition-colors" />
                      <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors">
                        {tech.name}
                      </h3>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="py-20 bg-slate-900/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Projetos
            </h2>

            {/* Work in Progress Section */}
            <div className="relative">
              {/* Caution Tapes with diagonal stripes */}
              <div className="absolute -top-4 -left-4 w-full h-8 transform -rotate-3 opacity-95 overflow-hidden"></div>

              <div className="absolute -bottom-4 -right-4 w-full h-8 transform rotate-2 opacity-95 overflow-hidden"></div>

              {/* Additional crossing tapes for more realistic effect */}
              <div className="absolute top-1/2 -left-8 w-1/3 h-6 transform -rotate-12 opacity-90 overflow-hidden"></div>

              <div className="absolute top-1/3 -right-8 w-1/3 h-6 transform rotate-15 opacity-90 overflow-hidden"></div>

              {/* Main Content */}
              <div className="p-12 text-center relative z-10">
                <div className="mb-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-yellow-500/20 rounded-full mb-6">
                    <svg
                      className="w-12 h-12 text-yellow-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  Work in Progress
                </h3>

                <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                  Estou trabalhando em alguns projetos incríveis de automação de
                  testes e frameworks personalizados. Em breve você poderá
                  conferir cases detalhados e repositórios com implementações
                  reais.
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                  >
                    🚧 Em Desenvolvimento
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    🔧 Cypress Framework
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                  >
                    ⚡ API Testing Suite
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    🧪 Unit Tests
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="bg-purple-500/20 text-purple-300 border-purple-500/30"
                  >
                    📊 Performance Tests
                  </Badge>
                </div>

                <div className="text-sm text-gray-400">
                  <p>
                    💡 Enquanto isso, fique à vontade para entrar em contato e
                    conhecer mais sobre minha experiência!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Vamos Conversar?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">
                  Entre em Contato
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Estou sempre aberto a novas oportunidades e conversas
                  interessantes sobre qualidade de software. Vamos trocar
                  ideias!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">
                      qajefferson92@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">+55 (54) 99989-4639</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Passo Fundo, RS</span>
                  </div>
                </div>
                <div className="flex space-x-4 mt-8">
                  <a
                    href="https://www.linkedin.com/in/jefferson-da-silva-borges/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-300 bg-transparent"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                  {/* <Button
                    variant="outline"
                    size="icon"
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 bg-transparent"
                  >
                    <Github className="w-5 h-5" />
                  </Button> */}
                </div>
              </div>
              <Card className="bg-slate-900/50 border-slate-700">
                <CardContent className="p-6">
                  <form className="space-y-6" onSubmit={enviarParaWhatsApp}>
                    <div className="flex items-center space-x-6">
                      <h3 className="text-base font-semibold ml-4 text-gray-300">
                        Me manda uma mensagem no Whats
                      </h3>
                      <MessageCircleMore className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <Input
                        placeholder="Seu nome"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Sua mensagem"
                        rows={5}
                        className="bg-slate-800/50 border-slate-600 text-white placeholder-gray-400 focus:border-cyan-500 resize-none"
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-green-500 to-green-800 hover:from-green-300 hover:to-green-800 text-white">
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 bg-slate-950/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Jefferson Borges. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/jefferson-da-silva-borges/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-cyan-400"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
              </a>
              {/* <Button variant="ghost" size="sm" className="text-gray-400 hover:text-purple-400">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
