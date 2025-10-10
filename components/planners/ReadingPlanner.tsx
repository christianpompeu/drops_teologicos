// components/planners/ReadingPlanner.tsx (Versão Otimizada com Lógica Completa)

"use client";

import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { useCallback, useEffect, useMemo, useState } from "react";
// Importa toda a lógica do plano de leitura
import {
    END_DATE,
    SPECIAL_PSALMS,
    START_DATE,
    TOTAL_DAYS,
    TOTAL_PSALMS,
    formatDate,
    formatFullDate,
    generatePlanData,
    isRevisionDay,
} from "@/lib/planner-utils";

const ReadingPlanner = () => {
  // Geração de Dados: Chamada única para montar todo o plano
  const planData = useMemo(() => generatePlanData(), []);

  const [activeView, setActiveView] = useState<"weekly" | "daily">("daily");
  const [progress, setProgress] = useState(0);

  // Lógica do Progresso
  const updateProgress = useCallback(() => {
    const today = new Date();
    const daysPassed = Math.floor(
      (today.getTime() - START_DATE.getTime()) / (1000 * 60 * 60 * 24)
    );
    const currentProgress = Math.min(
      100,
      Math.max(0, (daysPassed / TOTAL_DAYS) * 100)
    );
    setProgress(Math.round(currentProgress));
  }, []);

  useEffect(() => {
    updateProgress();
    const interval = setInterval(updateProgress, 3600000);
    return () => clearInterval(interval);
  }, [updateProgress]);

  // --- Renderização da Visão Semanal (Tailwind + Dados Reais) ---
  const renderWeeklyView = () => {
    // Agrupa os dias em semanas
    const weeks = planData.reduce(
      (acc, day) => {
        const weekNumber = Math.ceil(day.dayNumber / 7);
        if (!acc[weekNumber]) {
          acc[weekNumber] = {
            weekNumber,
            weekStart: day.date,
            weekEnd: day.date,
            days: [],
            psalms: new Set<number>(),
            isRevisionWeek: false,
          };
        }

        acc[weekNumber].days.push(day);
        day.psalms.forEach((p) => acc[weekNumber].psalms.add(p));
        acc[weekNumber].weekEnd = day.date; // Atualiza o fim da semana
        if (isRevisionDay(day.dayNumber)) {
          acc[weekNumber].isRevisionWeek = true;
        }

        return acc;
      },
      {} as Record<
        number,
        {
          weekNumber: number;
          weekStart: Date;
          weekEnd: Date;
          days: (typeof planData)[0][];
          psalms: Set<number>;
          isRevisionWeek: boolean;
        }
      >
    );

    return (
      <div className="space-y-4">
        {Object.values(weeks).map((week) => (
          <div
            key={week.weekNumber}
            className="bg-card m-2 md:m-3 rounded-xl shadow-md overflow-hidden border border-border/50"
          >
            <div className="bg-secondary text-secondary-foreground p-4 flex justify-between items-center">
              <span className="text-lg font-semibold">
                Semana {week.weekNumber}
              </span>
              <span className="text-sm opacity-90">
                {formatDate(week.weekStart)} – {formatDate(week.weekEnd)}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm mb-2 text-primary">
                Salmos da Semana (Leitura):
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {/* Exibe os Salmos únicos lidos na semana */}
                {[...week.psalms]
                  .sort((a, b) => a - b)
                  .map((psalm) => (
                    <span
                      key={psalm}
                      className={`px-3 py-1 text-sm rounded-full font-medium ${
                        SPECIAL_PSALMS.includes(psalm)
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {psalm}
                    </span>
                  ))}
              </div>

              <div
                className={`border-l-4 p-3 rounded-r-lg text-sm italic ${
                  week.isRevisionWeek
                    ? "border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300"
                    : "border-primary bg-primary/10 text-primary dark:text-primary"
                }`}
              >
                {week.isRevisionWeek
                  ? "📚 Esta semana inclui o Dia de Revisão Semanal. Concentre-se nas reflexões."
                  : "🙏 Meditação Diária: Ore e leia em busca de um versículo-chave."}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // --- Renderização da Visão Diária (Tailwind + Dados Reais) ---
  const renderDailyView = () => (
    <div className="space-y-2">
      {planData.map((day) => (
        <div key={day.dayNumber}>
          <div
            className={`bg-card m-2 md:m-3 p-4 rounded-xl shadow-sm flex items-center gap-4 transition-shadow hover:shadow-md border border-border/50 ${
              day.isRevision
                ? "border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20"
                : ""
            }`}
          >
            <div
              className={`flex items-center justify-center h-10 w-10 rounded-full font-bold text-sm flex-shrink-0 ${
                day.isRevision
                  ? "bg-yellow-500 text-white"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {day.dayNumber}
            </div>
            <div className="flex-1">
              <div className="text-xs text-muted-foreground mb-1">
                {formatFullDate(day.date)} • Ciclo {day.cycle}
              </div>
              <div className="font-semibold text-foreground">
                {day.psalms.length > 0 ? (
                  <>
                    Salmos{" "}
                    {day.psalms
                      .map((p) =>
                        SPECIAL_PSALMS.includes(p) ? (
                          <strong key={p} className="text-primary">
                            {p}
                          </strong>
                        ) : (
                          p
                        )
                      )
                      .join(", ")}
                  </>
                ) : (
                  <strong className="text-yellow-500">REVISÃO SEMANAL</strong>
                )}
              </div>
              <div className="text-xs text-muted-foreground mt-1 italic">
                {day.theme}
              </div>
            </div>
            {day.isRevision && (
              <div className="text-yellow-500 text-lg flex-shrink-0">📚</div>
            )}
          </div>
          {/* Nota de Revisão para Dias de Revisão */}
          {day.isRevision && (
            <p className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-300 text-sm italic p-3 rounded-r-lg mx-2 md:mx-3 mb-4">
              Dia de Revisão: Releia os versículos-chave dos últimos 6 dias e
              ore.
            </p>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full">
      {/* Header: Usa Primary Color */}
      <div className="bg-primary text-primary-foreground p-6 text-center rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold tracking-tight">
          📖 Plano de Leitura dos Salmos
        </h1>
        <p className="text-base opacity-90 mt-1">
          5 Ciclos Completos • {formatDate(START_DATE)} a {formatDate(END_DATE)}
        </p>
      </div>

      {/* Content Wrapper: Usa Card Background */}
      <div className="bg-card p-4 md:p-6 rounded-b-lg shadow-md -mt-4 relative z-10">
        {/* Stats Bar */}
        <div className="flex justify-around text-center py-4 border-b border-border/70">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">
              {TOTAL_DAYS}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Dias Total
            </span>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">5</span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Ciclos
            </span>
          </div>
          <Separator orientation="vertical" className="h-10" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-bold text-primary">
              {TOTAL_PSALMS}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              Salmos
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="py-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-foreground">
              Progresso do Plano
            </span>
            <span className="text-sm font-semibold text-primary">
              {progress}%
            </span>
          </div>
          <Progress value={progress} className="h-2 bg-muted/50" />
        </div>

        <Separator className="my-4" />

        {/* Navigation Tabs */}
        <div className="flex bg-background rounded-t-lg overflow-hidden border-b border-border/70">
          <button
            className={`flex-1 py-3 px-3 font-semibold text-sm transition-colors relative focus:outline-none ${
              activeView === "weekly"
                ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveView("weekly")}
          >
            📅 Semanal
          </button>
          <button
            className={`flex-1 py-3 px-3 font-semibold text-sm transition-colors relative focus:outline-none ${
              activeView === "daily"
                ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
            onClick={() => setActiveView("daily")}
          >
            📖 Diário
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-4">
          {activeView === "weekly" && (
            <div className="tw-animate-in fade-in">{renderWeeklyView()}</div>
          )}
          {activeView === "daily" && (
            <div className="tw-animate-in fade-in">{renderDailyView()}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingPlanner;
