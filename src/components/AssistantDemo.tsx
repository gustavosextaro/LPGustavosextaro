"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Terminal, Code2, CheckCircle2 } from "lucide-react";
import { aiCodeAssistant, AiCodeAssistantOutput } from "@/ai/flows/ai-code-assistant";

export function AssistantDemo() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<AiCodeAssistantOutput | null>(null);

  const simulateAsk = async () => {
    setLoading(true);
    try {
      const result = await aiCodeAssistant({
        taskDescription: "Como estruturar um dashboard de assinaturas no Firebase?",
        context: "Curso Do MVP ao SaaS"
      });
      setResponse(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-12 rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm overflow-hidden p-6 md:p-8 relative">
      <div className="glow-accent -top-20 -right-20 opacity-50" />
      
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-2 text-white font-medium">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">Bônus: Assistente Exclusivo</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-headline font-bold leading-tight">
            Nunca trave no código com o nosso Assistente de IA
          </h3>
          <p className="text-muted-foreground">
            Alunos têm acesso a uma ferramenta de IA treinada especificamente na metodologia do curso para gerar código, debugar e explicar conceitos de Micro SaaS em tempo real.
          </p>
          <Button 
            onClick={simulateAsk} 
            disabled={loading}
            className="bg-white text-black hover:bg-white/90 rounded-full px-8"
          >
            {loading ? "Processando..." : "Ver exemplo de ajuda"}
          </Button>
        </div>

        <div className="w-full md:w-[400px] bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-sm min-h-[250px] shadow-2xl relative overflow-hidden group">
          {!response && !loading && (
            <div className="flex flex-col items-center justify-center h-full text-muted-foreground opacity-50">
              <Terminal className="w-10 h-10 mb-2" />
              <p>Clique no botão para simular uma dúvida</p>
            </div>
          )}
          
          {loading && (
            <div className="space-y-3 animate-pulse">
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
              <div className="h-4 bg-white/10 rounded w-1/2"></div>
              <div className="h-20 bg-white/5 rounded w-full"></div>
            </div>
          )}

          {response && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex items-center gap-2 text-white">
                <Code2 className="w-4 h-4" />
                <span className="font-bold">Resposta do Assistente</span>
              </div>
              <div className="text-xs text-white/80 leading-relaxed whitespace-pre-wrap">
                {response.explanation}
              </div>
              {response.bestPracticesApplied && (
                <div className="space-y-2">
                  <span className="text-[10px] uppercase text-white/70">Boas práticas aplicadas:</span>
                  <div className="flex flex-wrap gap-2">
                    {response.bestPracticesApplied.map((bp, i) => (
                      <span key={i} className="text-[10px] bg-white/10 border border-white/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                        {bp}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
