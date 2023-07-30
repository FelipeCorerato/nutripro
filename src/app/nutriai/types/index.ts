import { MealsResponseEnhancedWithTotalizers } from "@/types/types";
import { ChatCompletionRequestMessage } from "openai";

export interface GtpData {
  data: MealsResponseEnhancedWithTotalizers;
  chatHistory?: ChatCompletionRequestMessage[];
}
