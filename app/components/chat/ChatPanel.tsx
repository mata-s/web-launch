'use client';

import { useState } from 'react';

type Message = {
  role: 'assistant' | 'user';
  content: string;
};

type ChatPanelProps = {
  onSubmitPrompt: (prompt: string) => void;
};

export default function ChatPanel({ onSubmitPrompt }: ChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'こんにちは。どんなホームページを作りますか？',
    },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: 'user',
        content: trimmedInput,
      },
      {
        role: 'assistant',
        content: 'いいですね。まずはシンプルなプレビューを作ってみます。',
      },
    ]);
    onSubmitPrompt(trimmedInput);
    setInput('');
  };

  return (
    <section className="flex h-full w-full flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-5 py-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-400">
          AI Assistant
        </p>
        <h2 className="mt-1 text-lg font-semibold text-zinc-900">サイト作成チャット</h2>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
        {messages.map((message, index) => {
          const isUser = message.role === 'user';

          return (
            <div
              key={`${message.role}-${index}`}
              className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  isUser
                    ? 'bg-zinc-900 text-white'
                    : 'bg-zinc-100 text-zinc-800'
                }`}
              >
                {message.content}
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="border-t border-zinc-200 p-4">
        <div className="flex gap-2 rounded-2xl border border-zinc-200 bg-zinc-50 p-2">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="例：美容室のホームページを作りたい"
            className="min-w-0 flex-1 bg-transparent px-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
          />
          <button
            type="submit"
            className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            送信
          </button>
        </div>
      </form>
    </section>
  );
}