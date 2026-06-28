import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text || text.trim().length === 0) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    // ZeroGPT API uses this key
    const apiKey = process.env.ZEROGPT_API_KEY || "fa17bc2a-df97-437c-8cd3-76ee59a0cc25";

    const response = await fetch('https://api.zerogpt.com/api/detect/detectText', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'ApiKey': apiKey
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("ZeroGPT API Error:", err);
      return NextResponse.json({ error: 'Failed to detect AI content' }, { status: response.status });
    }

    const data = await response.json();
    
    /* 
      ZeroGPT typically returns:
      {
        "success": true,
        "code": 200,
        "data": {
          "isHuman": 14.5, 
          "textWords": 300,
          "aiWords": 250,
          "fakePercentage": 85.5
        }
      }
    */
    
    return NextResponse.json({
      aiScore: data.data?.fakePercentage || data.fakePercentage || 0,
      feedback: data.data || data
    });

  } catch (error: any) {
    console.error("ZeroGPT exception:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
