const he = require("he");

const HUGGINGFACE_API_URL = "https://api-inference.huggingface.co/models/gpt2";
const HUGGINGFACE_API_KEY = "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";

async function query(data: { inputs: string }) {
  const response = await fetch(HUGGINGFACE_API_URL, {
    headers: { Authorization: `Bearer ${HUGGINGFACE_API_KEY}` },
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

function formatText(text: string) {
  const unescapedText = text.replace(/\\n/g, "\n");
  const decodedHtml = he.decode(unescapedText);
  if (decodedHtml.startsWith('"') && decodedHtml.endsWith('"')) {
    return decodedHtml.substring(1, decodedHtml.length - 1);
  }
  return decodedHtml;
}

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return Response.json({ message: "No prompt provided" }, { status: 400 });
    }

    const apiRes = await query({ inputs: prompt?.trim() });
    const completionText = formatText(
      apiRes[0].generated_text?.replace(prompt, "")
    );
    return new Response(completionText.toString());
  } catch (error) {
    console.error("Error processing request:", error);
    return Response.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
