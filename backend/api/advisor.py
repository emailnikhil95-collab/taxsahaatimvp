import os
import json
from groq import Groq
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

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
            model="llama3-70b-8192",
            messages=full_messages,
            temperature=0.7,
            max_tokens=1024
        )
        
        reply = completion.choices[0].message.content
        return 200, {"reply": reply}
    except Exception as e:
        print("Groq API Error:", e)
        return 500, {"error": str(e)}

def handle_advisor_action(payload: dict):
    if not client:
        return 500, {"error": "GROQ_API_KEY not configured on server"}
    
    action = payload.get("action") # "optimize", "anomalies", "explain"
    user_context = payload.get("context", {})
    
    prompts = {
        "optimize": (
            "You are an expert Indian CA. Analyze the user's tax data and suggest 3 actionable ways they can save more taxes. "
            "For example, if they have not exhausted 80C (limit 1.5L), suggest ELSS or PPF. If no 80CCD(1B), suggest NPS 50k. "
            f"User Data: {json.dumps(user_context)}"
        ),
        "anomalies": (
            "You are an expert Indian CA reviewing a tax file for errors. Look for inconsistencies in the user data. "
            "For example, claiming HRA without providing landlord PAN if rent > 1L, or having home loan interest but no house property income/loss. "
            "If everything looks fine, say 'No major anomalies found.' "
            f"User Data: {json.dumps(user_context)}"
        ),
        "explain": (
            "You are a friendly Indian CA explaining a tax calculation to a client in simple terms (use some conversational Hindi). "
            "Break down why their tax is what it is, why they are getting a refund or why they owe money. "
            f"User Data: {json.dumps(user_context)}"
        )
    }
    
    system_prompt = prompts.get(action, prompts["explain"])
    
    try:
        completion = client.chat.completions.create(
            model="llama3-70b-8192",
            messages=[{"role": "system", "content": system_prompt}],
            temperature=0.7,
            max_tokens=1024
        )
        return 200, {"reply": completion.choices[0].message.content}
    except Exception as e:
        print("Groq API Error:", e)
        return 500, {"error": str(e)}
