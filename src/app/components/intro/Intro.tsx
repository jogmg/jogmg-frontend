"use client";

import Button from "@app/components/Button";
import InputField from "@app/components/intro/InputField";
import TitleCard from "@app/components/intro/TitleCard";
import { lexend } from "@app/util/fonts";
import { sendUser } from "@app/util/query";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import z from "zod";
import TextAreaField from "./TextAreaField";

export interface IUserData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

const UserFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address").min(1, "Email is required"),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type UserForm = z.infer<typeof UserFormSchema>;

export default function Intro() {
  const [toggled, setIsToggled] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserForm>({
    resolver: zodResolver(UserFormSchema),
  });

  const handleGoBack = () => {
    setIsToggled(false);
  };

  const handleGetInTouch = () => {
    setIsToggled(true);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IUserData) => sendUser(data),
    onSuccess: () => {
      toast.success("Message sent successfully", { theme: "dark" });
      reset();
    },
    onError: (error) => {
      toast.error("Error: " + error.message, {
        theme: "dark",
      });
    },
  });

  const onSubmit: SubmitHandler<IUserData> = (data) => {
    mutate(data);
  };

  const introText = `I help businesses realize high-quality software solutions that meet user needs through design, development, and execution, all from my little room. \n\nLet's collaborate to bring your ideas to life.`;

  return (
    <section className="intro_container">
      <article className={`intro ${toggled ? "" : "active"}`}>
        <p>Hey there! 👋</p>
        <div className="details_container">
          <div className="heading_container">
            <h1 className={`h1 ${lexend.className}`}>I&apos;m Joshua Attah</h1>
            <div className="titleCard_container">
              <TitleCard text="FRONTEND DEVELOPER" />
              <TitleCard text="BACKEND DEVELOPER" />
              <TitleCard text="UI/UX DESIGNER" />
            </div>
          </div>
          <p className="desc">{introText}</p>
          <div className="cta_container">
            <Button
              id="view_btn"
              text="View Portfolio"
              btnType="main"
              linkUrl="/portfolio"
            />
            <Button
              id="contact_btn"
              text="Contact Me"
              btnType="alt"
              iconType="forward"
              action={handleGetInTouch}
            />
          </div>
        </div>
      </article>
      <article className={`getInTouch ${toggled ? "active" : ""}`}>
        <h2 className={`h2 ${lexend.className}`}>Contact Me</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input_container">
            <InputField {...register("name")} error={errors.name} />
            <InputField {...register("email")} error={errors.email} />
          </div>
          <InputField {...register("subject")} error={errors.subject} />
          <TextAreaField {...register("message")} error={errors.message} />
          <div className="cta_container">
            <Button
              id="send_btn"
              text={isPending ? "Sending..." : "Send"}
              type="submit"
              btnType="main"
              iconType="send"
              loading={isPending}
            />
            <Button
              id="back_btn"
              text="Go Back"
              btnType="alt"
              iconType="back"
              action={handleGoBack}
            />
          </div>
        </form>
      </article>
    </section>
  );
}
