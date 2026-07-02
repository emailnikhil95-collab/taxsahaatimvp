import os
import json
from groq import Groq

# Ensure API key is available
api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key=api_key) if api_key else None

def handle_advisor_chat(payload: dict):
    if not client:
        return 500, {"error": "GROQ_API_KEY not configured on server"}
    
    messages = payload.get("messages", [])
    user_context = payload.get("context", {})
    
    # System prompt to act as an expert Indian CA
    system_message = {
        "role": "system",
        "content": (
            "You are an expert Indian Chartered Accountant (CA) named 'TaxSahaati Smart CA'. "
            "Your job is to proactively find tax savings, ask smart context-aware questions to uncover missed deductions, "
            "and explain tax concepts in simple English (with a touch of conversational Hindi if appropriate). "
            "Do not give generic advice; tailor it to the user's situation based on the context provided. "
            f"User Context: {json.dumps(user_context)}"
        )
    }
    
    # Prepend system message
    full_messages = [system_message] + messages
    
    try:
        completion = client.chat.completions.create(
            model="llama3-8b-8192",
            messages=full_messages,
            temperature=0.7,
            max_tokens=1024
        )
        
        reply = completion.choices[0].message.content
        return 200, {"reply": reply}
    except Exception as e:
        print("Groq API Error:", e)
        return 500, {"error": str(e)}
