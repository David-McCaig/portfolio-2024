"use client";
import { useRef } from "react";
import { ContactFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { PaperPlaneIcon, ReloadIcon } from "@radix-ui/react-icons";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Textarea } from "./ui/Textarea";
import Link from "next/link";
import emailjs from "@emailjs/browser";

type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
  const form = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      user_name: "",
      user_email: "",
      message: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    if (form.current) {
      try {
        await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        );
        toast.success("Message sent successfully!");
        reset();
      } catch (error) {
        toast.error("Failed to send message!");
      }
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(processForm)}>
      {/* Make sure to add name attributes that match your EmailJS template variables */}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="h-16">
          <Input
            id="name"
            type="text"
            placeholder="Name"
            {...register("user_name", { required: true })}
            name="user_name"
          />
          {errors.user_name?.message && (
            <p className="input-error">{errors.user_name.message}</p>
          )}
        </div>

        <div className="h-16">
          <Input
            id="email"
            type="email"
            placeholder="Email"
            autoComplete="email"
            {...register("user_email")}
          />
          {errors.user_email?.message && (
            <p className="input-error">{errors.user_email.message}</p>
          )}
        </div>

        <div className="h-32 sm:col-span-2">
          <Textarea
            rows={4}
            placeholder="Leave feedback about the site, career opportunities or just to say hello etc."
            autoComplete="Message"
            className="resize-none"
            {...register("message")}
          />
          {errors.message?.message && (
            <p className="input-error">{errors.message.message}</p>
          )}
        </div>
      </div>
      <div className="mt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <span>Sending...</span>
              <ReloadIcon className="ml-2 animate-spin" />
            </div>
          ) : (
            <div className="flex items-center">
              <span>Send Message</span>
              <PaperPlaneIcon className="ml-2" />
            </div>
          )}
        </Button>
        <p className="mt-4 text-xs text-muted-foreground">
          By submitting this form, I agree to the{" "}
          <Link href="/privacy" className="link font-semibold">
            privacy&nbsp;policy.
          </Link>
        </p>
      </div>
    </form>
  );
}
