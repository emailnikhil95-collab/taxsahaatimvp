"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDraftStore } from "@/lib/store/draft";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export function AIChatInterview() {
  const { data } = useDraftStore();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I am your AI Smart CA. I'm reviewing your tax profile. To ensure we don't miss any deductions, could you tell me if you switched jobs this year or sold any mutual funds?"
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      // In production, you would point this to your backend route
      // We are pointing to the FastAPI backend
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND_URL
          ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/advisor/chat`
          : "/_/backend/api/advisor/chat", 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.role,
              content: m.content,
            })),
            context: {
              salary: data.income?.salary?.totalSalary || 0,
              regime: data.taxCompute?.optOutNewRegime ? "old" : "new",
            },
          }),
        }
      );

      const json = await res.json();
      if (res.ok && json.reply) {
        setMessages((prev) => [...prev, { role: "assistant", content: json.reply }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "Sorry, I am having trouble connecting to my brain right now. Please try again." }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error connecting to the AI CA." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[500px] border border-border rounded-xl bg-card overflow-hidden">
      <div className="p-4 border-b border-border bg-slate-50/50 flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-full text-primary">
          <Bot className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-semibold text-slate-800 text-sm">Smart CA Advisory</h3>
          <p className="text-xs text-slate-500">I help you find missed deductions</p>
        </div>
      </div>
      
      <ScrollArea className="flex-1 p-4" ref={scrollRef}>
        <div className="space-y-4 pb-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-3 text-sm",
                msg.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center",
                  msg.role === "user"
                    ? "bg-slate-800 text-white"
                    : "bg-primary/10 text-primary"
                )}
              >
                {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>
              <div
                className={cn(
                  "px-4 py-2.5 rounded-2xl max-w-[80%]",
                  msg.role === "user"
                    ? "bg-slate-800 text-white rounded-tr-sm"
                    : "bg-slate-100 text-slate-800 rounded-tl-sm border border-slate-200"
                )}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-3 text-sm">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div className="px-4 py-2.5 rounded-2xl bg-slate-100 text-slate-500 rounded-tl-sm border border-slate-200 flex items-center gap-2">
                <Loader2 className="w-3 h-3 animate-spin" /> Thinking...
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-3 border-t border-border bg-white flex gap-2">
        <Input
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1"
        />
        <Button onClick={sendMessage} disabled={!input.trim() || loading} size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
