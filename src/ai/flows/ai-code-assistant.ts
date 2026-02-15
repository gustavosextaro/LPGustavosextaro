'use server';
/**
 * @fileOverview An AI assistant for Vibe Coding, capable of generating code snippets,
 * debugging, and providing explanations based on course best practices.
 *
 * - aiCodeAssistant - A function that leverages AI to assist with Vibe Coding tasks.
 * - AiCodeAssistantInput - The input type for the aiCodeAssistant function.
 * - AiCodeAssistantOutput - The return type for the aiCodeAssistant function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AiCodeAssistantInputSchema = z.object({
  userCode: z
    .string()
    .optional()
    .describe('The code snippet provided by the user for assistance.'),
  taskDescription: z
    .string()
    .describe(
      'A description of the task the user wants to accomplish (e.g., "generate a login component," "debug this code," "explain this error").'
    ),
  context: z
    .string()
    .optional()
    .describe(
      'Additional context such as the course module, specific best practices, or error messages relevant to the task.'
    ),
});
export type AiCodeAssistantInput = z.infer<typeof AiCodeAssistantInputSchema>;

const AiCodeAssistantOutputSchema = z.object({
  responseType: z
    .enum([
      'code_snippet',
      'explanation',
      'debug_suggestion',
      'general_advice',
    ])
    .describe(
      'The type of response provided by the AI (e.g., code_snippet, explanation, debug_suggestion, general_advice).'
    ),
  generatedCode: z
    .string()
    .optional()
    .describe('An optional generated code snippet.'),
  explanation: z
    .string()
    .optional()
    .describe('An explanation or advice related to the task.'),
  suggestions: z
    .array(z.string())
    .optional()
    .describe('An optional list of suggestions for debugging or improvement.'),
  bestPracticesApplied: z
    .array(z.string())
    .optional()
    .describe(
      'A list of Vibe Coding best practices from the course that were applied or recommended.'
    ),
});
export type AiCodeAssistantOutput = z.infer<
  typeof AiCodeAssistantOutputSchema
>;

export async function aiCodeAssistant(
  input: AiCodeAssistantInput
): Promise<AiCodeAssistantOutput> {
  return aiCodeAssistantFlow(input);
}

const aiCodeAssistantPrompt = ai.definePrompt({
  name: 'aiCodeAssistantPrompt',
  input: { schema: AiCodeAssistantInputSchema },
  output: { schema: AiCodeAssistantOutputSchema },
  prompt: `You are an expert Vibe Coding assistant, specializing in helping students create and debug Micro SaaS applications using modern tools like Firebase, Supabase, and GitHub, applying best practices from the "Do MVP ao SaaS" course.

Your goal is to assist the user based on their task description and provided code/context, either by generating code snippets, debugging, explaining concepts, or offering general advice.
Always prioritize applying best practices taught in the course, such as: clean structure, efficient use of tools, proper version control (GitHub), and a product-first mindset.

Input:
Task Description: {{{taskDescription}}}
{{#if userCode}}User Code:
'''
{{{userCode}}}
'''
{{/if}}
{{#if context}}Additional Context:
{{{context}}}
{{/if}}

Based on the above, provide a comprehensive response in the specified JSON format. If you provide code, ensure it adheres to Vibe Coding principles and is directly usable. If debugging, explain the issue clearly and suggest solutions. When providing explanations or advice, link them back to course concepts and best practices where relevant.`,
});

const aiCodeAssistantFlow = ai.defineFlow(
  {
    name: 'aiCodeAssistantFlow',
    inputSchema: AiCodeAssistantInputSchema,
    outputSchema: AiCodeAssistantOutputSchema,
  },
  async (input) => {
    const { output } = await aiCodeAssistantPrompt(input);
    return output!;
  }
);
