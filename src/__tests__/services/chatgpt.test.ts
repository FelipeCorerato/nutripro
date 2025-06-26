// @jest-environment node

declare global {
  // eslint-disable-next-line no-var
  var __mockCreateChatCompletion: jest.Mock;
  // eslint-disable-next-line no-var
  var __mockCreateCompletion: jest.Mock;
}

jest.mock('openai', () => {
  global.__mockCreateChatCompletion = jest.fn();
  global.__mockCreateCompletion = jest.fn();
  class OpenAIApi {
    createChatCompletion = global.__mockCreateChatCompletion;
    createCompletion = global.__mockCreateCompletion;
  }
  return {
    Configuration: jest.fn(),
    OpenAIApi,
  };
});

import * as chatgptService from '@/services/chatgpt';

beforeEach(() => {
  global.__mockCreateChatCompletion.mockReset();
  global.__mockCreateCompletion.mockReset();
});

describe('ChatGPT Service', () => {
  it('sendChatMessage should return JSON response and history', async () => {
    const mockResponse = { choices: [{ message: { content: '{"foo":"bar"}' } }] };
    global.__mockCreateChatCompletion.mockResolvedValueOnce({ data: mockResponse });
    const result = await chatgptService.sendChatMessage({ message: 'Hi' });
    expect(result.response).toEqual({ foo: 'bar' });
    expect(result.chatHistory[result.chatHistory.length - 1].content).toContain('foo');
  });

  it('sendChatMessageV2 should return string response and history', async () => {
    const mockResponse = { choices: [{ message: { content: 'string response' } }] };
    global.__mockCreateChatCompletion.mockResolvedValueOnce({ data: mockResponse });
    const result = await chatgptService.sendChatMessageV2({ message: 'Hi' });
    expect(result.response).toBe('string response');
    expect(result.chatHistory[result.chatHistory.length - 1].content).toContain('string response');
  });

  it('sendMessage should return JSON response', async () => {
    const mockResponse = { choices: [{ text: '{"abc":123}' }] };
    global.__mockCreateCompletion.mockResolvedValueOnce({ data: mockResponse });
    const result = await chatgptService.sendMessage({ message: 'Test' });
    expect(result.response).toEqual({ abc: 123 });
  });
}); 