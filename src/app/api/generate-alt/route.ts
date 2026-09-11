import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    console.log(formData);
    const image = formData.get("image") as File;

    if (!image) {
      return Response.json({ error: "이미지가 없습니다." }, { status: 400 });
    }

    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const base64Image = buffer.toString("base64");
    const response = await client.responses.create({
      model: "gpt-5.4",
      input: [
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `
이 이미지를 보고 이미지를 설명하는 부연 설명은 없이 웹 접근성용 대체텍스트를 한국어로 작성해줘. 
'이미지', '아이콘' 덧붙이는 설명은 제외해줘.
`,
            },
            {
              type: "input_image",
              image_url: `data:${image.type};base64,${base64Image}`,
            },
          ],
        },
      ],
    });

    const altText = response.output_text || "대체텍스트 생성 실패";

    return Response.json({ altText });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        error:
          error?.status === 429
            ? "OpenAI 사용량 한도를 초과했습니다."
            : "서버 오류",
      },
      { status: 500 },
    );
  }
}
