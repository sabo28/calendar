import { Handlers, PageProps } from "$fresh/server.ts";
import { getDailySummary } from "../utils/getDailySummary.ts";
import Calendar from "../islands/Calendar.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const today = new Date().toISOString().split("T")[0];
    const summary = await getDailySummary(today);
    return ctx.render({ summary });
  },
};

export default function Home({ data }: PageProps<{ summary: string }>) {
  return (
    <main>
      <h1>📆 Terminbuchung</h1>
      <p><strong>KI-Zusammenfassung:</strong> {data.summary}</p>
      <Calendar />
    </main>
  );
}
