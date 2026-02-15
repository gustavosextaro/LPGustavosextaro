'use server';
/**
 * @fileOverview A Genkit flow for brainstorming and refining Micro SaaS ideas.
 *
 * - generateSaaSIdea - A function that handles the Micro SaaS idea generation process.
 * - SaaSIdeaGeneratorInput - The input type for the generateSaaSIdea function.
 * - SaaSIdeaGeneratorOutput - The return type for the generateSaaSIdea function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SaaSIdeaGeneratorInputSchema = z.object({
  ideaConcept: z.string().describe('A general concept for a Micro SaaS idea.'),
});
export type SaaSIdeaGeneratorInput = z.infer<typeof SaaSIdeaGeneratorInputSchema>;

const SaaSIdeaGeneratorOutputSchema = z.object({
  features: z.array(z.string()).describe('A list of potential features for the Micro SaaS.'),
  targetAudience: z.array(z.string()).describe('A list of potential target audiences for the Micro SaaS.'),
  valueProposition: z.string().describe('A basic value proposition for the Micro SaaS.'),
});
export type SaaSIdeaGeneratorOutput = z.infer<typeof SaaSIdeaGeneratorOutputSchema>;

export async function generateSaaSIdea(input: SaaSIdeaGeneratorInput): Promise<SaaSIdeaGeneratorOutput> {
  return saaSIdeaGeneratorFlow(input);
}

const saaSIdeaGeneratorPrompt = ai.definePrompt({
  name: 'saaSIdeaGeneratorPrompt',
  input: {schema: SaaSIdeaGeneratorInputSchema},
  output: {schema: SaaSIdeaGeneratorOutputSchema},
  prompt: `You are an expert in Micro SaaS development and product strategy. Your task is to help a student brainstorm and refine their Micro SaaS idea.
Given a general concept for a Micro SaaS, generate potential features, identify the target audience, and formulate a basic value proposition.

Micro SaaS Concept: {{{ideaConcept}}}

Please provide the output in the following JSON format:`,
});

const saaSIdeaGeneratorFlow = ai.defineFlow(
  {
    name: 'saaSIdeaGeneratorFlow',
    inputSchema: SaaSIdeaGeneratorInputSchema,
    outputSchema: SaaSIdeaGeneratorOutputSchema,
  },
  async input => {
    const {output} = await saaSIdeaGeneratorPrompt(input);
    return output!;
  }
);
