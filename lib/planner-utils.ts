// lib/planner-utils.ts

// --- Configurações do Plano ---
export const START_DATE = new Date(2025, 9, 10); // 10 de Outubro de 2025 (Mês 9 = Outubro)
export const END_DATE = new Date(2026, 0, 10); // 10 de Janeiro de 2026 (Mês 0 = Janeiro)
export const TOTAL_DAYS = 93;
export const TOTAL_PSALMS = 750; // 150 Salmos * 5 Ciclos
export const SPECIAL_PSALMS = [1, 23, 51, 91, 100, 119, 121, 139, 150];
export const PSALMS_PER_READING_DAY = 9; // 750 Salmos / (93 dias - 13 revisões) = 8.86 salmos/dia (arredondado para 9 para a maioria dos dias)

/**
 * Calcula o array de Salmos para um dia específico do plano.
 * O plano tem 80 dias de leitura (93 dias - 13 dias de revisão).
 * A leitura total é de 750 Salmos.
 *
 * @param dayNumber O número sequencial do dia no plano (1 a 93).
 * @returns Um array de números de Salmos a serem lidos.
 */
export function getPsalmsForDay(dayNumber: number): number[] {
  if (dayNumber < 1 || dayNumber > TOTAL_DAYS) {
    return [];
  }

  // 1. Verificar se é dia de Revisão (7º dia de cada semana)
  // O dia de revisão cai no 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91 (total de 13 dias)
  if (dayNumber % 7 === 0 && dayNumber <= 91) {
    // O último dia (93) não é revisão, é a leitura final, mas o 91 sim.
    return []; // Dias de revisão não têm nova leitura.
  }

  // 2. Determinar o ciclo e o dia de leitura dentro do ciclo
  // Dias de leitura total: 93 - 13 (revisões) = 80 dias.
  // 5 ciclos * 150 Salmos = 750 Salmos.

  // Mapeamento dos dias do plano para dias de leitura:
  // Dia 1 -> Leitura 1
  // Dia 6 -> Leitura 6
  // Dia 7 -> Revisão (ignorado)
  // Dia 8 -> Leitura 7
  let readingDay = 0; // O número sequencial do dia de leitura (1 a 80)
  for (let i = 1; i <= dayNumber; i++) {
    if (i % 7 !== 0 || i > 91) {
      readingDay++;
    }
  }

  // Ajuste final para o dia 93, que é a Leitura 80.
  if (dayNumber === 93) {
    readingDay = 80;
  }

  // 3. Calcular a faixa de Salmos
  // (750 Salmos / 80 dias de leitura) = 9.375 salmos/dia.
  // Usaremos blocos de 9 Salmos para os primeiros dias e ajustaremos os últimos.

  const startPsalmIndex = Math.floor((readingDay - 1) * 9.375) + 1;
  let endPsalmIndex = Math.floor(readingDay * 9.375);

  // Ajuste para garantir que o último Salmo seja o 750.
  if (readingDay === 80) {
    endPsalmIndex = 750;
  }

  // 4. Mapear o Índice de Salmo (1 a 750) para o Salmo Real (1 a 150)
  const psalms: number[] = [];
  for (let i = startPsalmIndex; i <= endPsalmIndex; i++) {
    // (i - 1) % 150: Pega o índice dentro do ciclo (0 a 149)
    // + 1: Converte de volta para número de Salmo (1 a 150)
    const psalmNumber = ((i - 1) % 150) + 1;

    // Adiciona apenas se for um Salmo válido e não duplicado (embora não deva duplicar)
    if (psalmNumber >= 1 && psalmNumber <= 150) {
      psalms.push(psalmNumber);
    }
  }

  return psalms;
}

/**
 * Retorna se o dia é um dia de Revisão.
 */
export function isRevisionDay(dayNumber: number): boolean {
  // Dias 7, 14, 21, ..., 91
  return dayNumber % 7 === 0 && dayNumber <= 91;
}

/**
 * Retorna o tema central do dia (simplificado).
 */
export function getThemeForDay(dayNumber: number): string {
  if (isRevisionDay(dayNumber)) {
    return "Dia de Revisão Semanal: Oração e Meditação nas Lições Aprendidas.";
  }
  if (dayNumber === 93) {
    return "Conclusão do Plano: Doxologia Final e Louvor Universal (Salmos 84-150 - Ciclo 5).";
  }

  const psalms = getPsalmsForDay(dayNumber);
  if (psalms.length === 0) {
    return "Leitura dos Salmos: Tema Central dos Salmos lidos.";
  }

  const firstPsalm = psalms[0];
  const themes = {
    1: "A Lei, O Justo e O Ímpio",
    19: "A Glória de Deus na Criação e na Lei",
    23: "O Senhor é o meu Pastor (Confiança)",
    37: "A Justiça de Deus e a Paciência",
    51: "Arrependimento e Misericórdia",
    91: "O Abrigo do Altíssimo (Proteção)",
    119: "Louvor à Palavra de Deus (Grande Leitura)",
    139: "A Onipresença e Onisciência de Deus",
    // ... (Adicione mais temas conforme o seu planner detalhado)
  };

  // Tenta encontrar um tema específico para o primeiro Salmo do bloco.
  const specificTheme = Object.entries(themes)
    .reverse()
    .find(([p]) => firstPsalm >= parseInt(p));

  return specificTheme ? specificTheme[1] : "Leitura: Meditação e Oração";
}

/**
 * Funções de Formatação de Data
 */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
}

export function formatFullDate(date: Date): string {
  return date.toLocaleDateString("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });
}

// Geração da lista completa para a visão diária/semanal
export function generatePlanData() {
  const plan = [];
  const currentDate = new Date(START_DATE);

  for (let dayNumber = 1; dayNumber <= TOTAL_DAYS; dayNumber++) {
    const date = new Date(currentDate);
    const psalms = getPsalmsForDay(dayNumber);
    const isRevision = isRevisionDay(dayNumber);
    const theme = getThemeForDay(dayNumber);

    plan.push({
      dayNumber,
      date,
      isRevision,
      psalms,
      theme,
      cycle: Math.floor((dayNumber - 1) / 30) + 1,
      // O ciclo pode ser mais complexo de calcular, mas para o tema visual, o número é suficiente
    });

    currentDate.setDate(currentDate.getDate() + 1);
  }
  return plan;
}
