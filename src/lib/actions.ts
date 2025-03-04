"use server";

import ContactFormEmail from "@/components/email/ContactFormEmail";
import { Resend } from "resend";
import { z } from "zod";
import { ContactFormSchema } from "./schemas";
import { CoreMessage, streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { createStreamableValue } from 'ai/rsc';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

// export async function sendEmail(data: ContactFormInputs) {
//   const result = ContactFormSchema.safeParse(data);

//   if (result.error) {
//     return { error: result.error.format() };
//   }

//   try {
//     const { name, email, message } = result.data;
//     const { data, error } = await resend.emails.send({
//       from: 'Acme <onboarding@resend.dev>',
//       to: ['davidmccaig1@gmail.com'],
//       replyTo: [email],
//       cc: [email],
//       subject: `New message from ${name}!`,
//       text: `Name:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`,
//     });

//     if (!data || error) {
//       console.error(error?.message);
//       throw new Error("Failed to send email!");
//     }

//     return { success: true };
//   } catch (error: any) {
//     return { error: error.message || 'Unknown Error' }; // Ensure you return a plain object
//   }
// }


export async function continueConversation(messages: CoreMessage[]) {
  // Example: Adding a system message to guide the AI
  const systemMessage: CoreMessage = {
    role: 'assistant',
    content: "Please help me reflect on how I'd like to be remembered. Step-0 Ask each question from Step-1, Step-2 and Step-3 individually and don't write Step.  Step-1 Ask me what values or qualities I want people to associate with me. Step 2 - Ask me when people think of your contributions or impact, what do you hope they will remember. Step 3 - Ask me to recall a specific moment or accomplishment that best represents who I am? Step 4 - With this information write in my voice an answer to 'How would like to be remembered?'. Do not ask the question 'How would you like to be remembered?' Make sure to only write the answer to the question and nothing else. Write it in first person from my perspective",
  };

  const updatedMessages = [systemMessage, ...messages];

  const result = await streamText({
    model: openai('gpt-4o-mini') as any,
    messages: updatedMessages,
  });
  console.log("This is the error" + result);

  const stream = createStreamableValue(result.textStream);
  return stream.value;
}