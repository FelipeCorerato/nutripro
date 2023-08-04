import { ChatCompletionRequestMessage } from "openai";

import { MealsResponseEnhancedWithTotalizers } from "@/types/types";

export interface GtpData {
  data: MealsResponseEnhancedWithTotalizers;
  chatHistory?: ChatCompletionRequestMessage[];
}
