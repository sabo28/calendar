export async function getDailySummary(date: string): Promise<string> {
    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) throw new Error("OPENAI_API_KEY not set");
  
    const prompt = `Heute ist der ${date}. Welches geschichtlich bedeutsame Ereignis geschah an diesem Tag in der Geschichte der Menschheit? Bitte antworte mit einem kurzen, klaren Text in Deutsch.`;
  
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });
  
    const data = await response.json();
    return data.choices?.[0]?.message?.content ?? "Keine Info gefunden.";
  }
  