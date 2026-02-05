/**
 * ChatGPT Clone API Client for React/TypeScript
 * 
 * Usage:
 * ```tsx
 * import { ChatClient } from '@/lib/chatClient';
 * 
 * const client = new ChatClient('sk-test-key-12345');
 * const response = await client.chat('Hello!');
 * ```
 */

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequest {
  messages: Message[];
  temperature?: number;
  max_tokens?: number;
  model?: 'gemini' | 'openai';
}

interface ChatResponse {
  reply: string;
  model: string;
  tokens_used: number;
}

interface KeyInfo {
  name: string;
  created_at: string;
  requests_limit: number;
  requests_used: number;
  requests_remaining: number;
}

interface HealthStatus {
  status: string;
  timestamp: string;
  gemini_available: boolean;
  openai_available: boolean;
}

export class ChatClient {
  private baseUrl: string;
  private apiKey: string;

  constructor(apiKey: string, baseUrl: string = 'http://localhost:8000') {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  /**
   * Send a chat message
   */
  async chat(
    message: string,
    options?: {
      model?: 'gemini' | 'openai';
      temperature?: number;
      max_tokens?: number;
    }
  ): Promise<ChatResponse> {
    const payload: ChatRequest = {
      messages: [{ role: 'user', content: message }],
      model: options?.model ?? 'gemini',
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.max_tokens ?? 2048,
    };

    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'API request failed');
    }

    return response.json();
  }

  /**
   * Multi-turn conversation
   */
  async chatWithHistory(
    messages: Message[],
    options?: {
      model?: 'gemini' | 'openai';
      temperature?: number;
      max_tokens?: number;
    }
  ): Promise<ChatResponse> {
    const payload: ChatRequest = {
      messages,
      model: options?.model ?? 'gemini',
      temperature: options?.temperature ?? 0.7,
      max_tokens: options?.max_tokens ?? 2048,
    };

    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: 'POST',
      headers: {
        'X-API-Key': this.apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'API request failed');
    }

    return response.json();
  }

  /**
   * Quick text generation
   */
  async generate(prompt: string): Promise<ChatResponse> {
    const response = await fetch(
      `${this.baseUrl}/api/generate?prompt=${encodeURIComponent(prompt)}`,
      {
        method: 'POST',
        headers: {
          'X-API-Key': this.apiKey,
        },
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'API request failed');
    }

    return response.json();
  }

  /**
   * Get API key information
   */
  async getKeyInfo(): Promise<KeyInfo> {
    const response = await fetch(`${this.baseUrl}/api/keys/info`, {
      headers: {
        'X-API-Key': this.apiKey,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'API request failed');
    }

    return response.json();
  }

  /**
   * Check server health
   */
  async healthCheck(): Promise<HealthStatus> {
    const response = await fetch(`${this.baseUrl}/api/health`);

    if (!response.ok) {
      throw new Error('Health check failed');
    }

    return response.json();
  }
}

/**
 * React Hook for using the Chat Client
 */
import { useState, useCallback } from 'react';

interface UseChatOptions {
  apiKey: string;
  baseUrl?: string;
}

interface UseChatResult {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export function useChat({
  apiKey,
  baseUrl = 'http://localhost:8000',
}: UseChatOptions): UseChatResult {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const client = new ChatClient(apiKey, baseUrl);

  const sendMessage = useCallback(
    async (content: string) => {
      setIsLoading(true);
      setError(null);

      try {
        // Add user message
        const userMessage: Message = { role: 'user', content };
        setMessages((prev) => [...prev, userMessage]);

        // Get response
        const response = await client.chatWithHistory([
          ...messages,
          userMessage,
        ]);

        // Add assistant message
        const assistantMessage: Message = {
          role: 'assistant',
          content: response.reply,
        };
        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setIsLoading(false);
      }
    },
    [client, messages]
  );

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
}

/**
 * Example React Component
 */
export function ChatComponent() {
  const { messages, isLoading, error, sendMessage, clearMessages } = useChat({
    apiKey: 'sk-test-key-12345',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.message;
    const content = input.value.trim();

    if (!content) return;

    await sendMessage(content);
    input.value = '';
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`mb-4 ${
              msg.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <div
              className={`inline-block p-3 rounded-lg ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-900'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="text-gray-500 text-sm">Thinking...</div>
        )}
        {error && (
          <div className="text-red-500 text-sm">Error: {error}</div>
        )}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            name="message"
            placeholder="Type your message..."
            disabled={isLoading}
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            Send
          </button>
          <button
            type="button"
            onClick={clearMessages}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}
