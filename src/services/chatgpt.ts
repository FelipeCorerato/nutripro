import * as dotenv from "dotenv";
import { ChatCompletionRequestMessage, Configuration, CreateChatCompletionResponse, CreateCompletionResponse, OpenAIApi } from "openai";

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.NUTRIPRO_CHAT_GPT_API_KEY,
});

const openai = new OpenAIApi(configuration);

const getStringifiedAnswerFromApiCompletionResponse = (data: CreateCompletionResponse): string => {
  return data.choices[0].text as string;
};

const getStringifiedAnswerFromApiChatCompletionResponse = (data: CreateChatCompletionResponse): string => {
  return data.choices[0].message?.content as string;
};

export interface SendMessageReturnType {
  response: unknown;
  chatHistory: ChatCompletionRequestMessage[];
}
export const sendChatMessage = async (props: { previousDialog?: ChatCompletionRequestMessage[], message: string }): Promise<SendMessageReturnType> => {
  try {
    const previousDialog: ChatCompletionRequestMessage[] = props.previousDialog ? props.previousDialog : [];
    const { data: gptResponse } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        ...previousDialog,
        {
          role: "user",
          content: props.message,
        }
      ],
    });
    const rawContent = getStringifiedAnswerFromApiChatCompletionResponse(gptResponse);
    const json = JSON.parse(rawContent);
    return {
      response: json,
      chatHistory: [
        ...previousDialog,
        {
          role: "user",
          content: props.message,
        },
        {
          role: "assistant",
          content: rawContent,
        },
      ],
    };
  } catch (error) {
    return {
      response: { error: (error as Error).message },
      chatHistory: [],
    };
  }
};

export const sendChatMessageV2 = async (props: { previousDialog?: ChatCompletionRequestMessage[], message: string }): Promise<SendMessageReturnType> => {
  try {
    const previousDialog: ChatCompletionRequestMessage[] = props.previousDialog ? props.previousDialog : [];
    const { data: gptResponse } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        ...previousDialog,
        {
          role: "user",
          content: props.message,
        }
      ],
    });
    const response = getStringifiedAnswerFromApiChatCompletionResponse(gptResponse);
    return {
      response,
      chatHistory: [
        ...previousDialog,
        {
          role: "user",
          content: props.message,
        },
        {
          role: "assistant",
          content: response,
        },
      ],
    };
  } catch (error) {
    return {
      response: { error: (error as Error).message },
      chatHistory: [],
    };
  }
};

export const sendMessage = async (props: { message: string }): Promise<Omit<SendMessageReturnType, "chatHistory">> => {
  try {
    const { data: gptResponse } = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: props.message,
    });
    const rawContent = getStringifiedAnswerFromApiCompletionResponse(gptResponse);
    const json = JSON.parse(rawContent);
    return {
      response: json,
    };
  } catch (error) {
    return {
      response: { error: (error as Error).message },
    };
  }
};
