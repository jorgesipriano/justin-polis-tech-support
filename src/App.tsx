import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/About";
import ServiceLanding from "./pages/ServiceLanding";
import BlogDicasLimpezaMaquina from "./pages/BlogDicasLimpezaMaquina";
import GeladeiraBorrachaVedacao from "./pages/dicas/GeladeiraBorrachaVedacao";
import LavaSecaNaoSeca from "./pages/dicas/LavaSecaNaoSeca";
import MicroondasFaiscas from "./pages/dicas/MicroondasFaiscas";
import MaquinaAguaParada from "./pages/dicas/MaquinaAguaParada";
import HigienizacaoCrostaOculta from "./pages/dicas/HigienizacaoCrostaOculta";
import GeladeiraGastandoMuito from "./pages/dicas/GeladeiraGastandoMuito";
import ErroLavaESeca from "./pages/dicas/ErroLavaESeca";
import PerigoMicroondas from "./pages/dicas/PerigoMicroondas";
import BairroLanding, { bairroSlugs } from "./pages/BairroLanding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/page" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/reparo-maquina-lavar-belo-horizonte" element={<ServiceLanding />} />
            <Route path="/reparo-geladeira-justinopolis" element={<ServiceLanding />} />
            <Route path="/reparo-lava-e-seca" element={<ServiceLanding />} />
            <Route path="/limpa-lava-e-seca" element={<ServiceLanding />} />
            <Route path="/conserto-microondas-bh" element={<ServiceLanding />} />
            <Route path="/conserto-freezer-bh" element={<ServiceLanding />} />
            <Route path="/conserto-maquina-lavar" element={<ServiceLanding />} />
            <Route path="/conserto-geladeira-justinopolis" element={<ServiceLanding />} />
            <Route path="/conserto-maquina-lavar-justinopolis" element={<ServiceLanding />} />
            <Route path="/conserto-lava-e-seca-justinopolis" element={<ServiceLanding />} />
            <Route path="/conserto-microondas-justinopolis" element={<ServiceLanding />} />
            <Route path="/conserto-freezer-justinopolis" element={<ServiceLanding />} />
            <Route path="/conserto-fogao-ribeirao-das-neves" element={<ServiceLanding />} />
            <Route path="/conserto-secadora-ribeirao-das-neves" element={<ServiceLanding />} />
            <Route path="/conserto-cooktop-ribeirao-das-neves" element={<ServiceLanding />} />
            <Route path="/blog/dicas-limpeza-maquina" element={<BlogDicasLimpezaMaquina />} />
            <Route path="/dicas/geladeira-borracha-vedacao" element={<GeladeiraBorrachaVedacao />} />
            <Route path="/dicas/lava-e-seca-nao-seca" element={<LavaSecaNaoSeca />} />
            <Route path="/dicas/microondas-faiscas-perigo" element={<MicroondasFaiscas />} />
            <Route path="/dicas/maquina-agua-parada-drenagem" element={<MaquinaAguaParada />} />
            <Route path="/dicas/higienizacao-crosta-oculta" element={<HigienizacaoCrostaOculta />} />
            <Route path="/dicas/geladeira-gastando-muito" element={<GeladeiraGastandoMuito />} />
            <Route path="/dicas/erro-lava-e-seca" element={<ErroLavaESeca />} />
            <Route path="/dicas/perigo-microondas" element={<PerigoMicroondas />} />
            {bairroSlugs.map((slug) => (
              <Route key={slug} path={`/${slug}`} element={<BairroLanding />} />
            ))}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
