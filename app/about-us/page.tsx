import type { FC } from "react";
import type { Metadata } from "next";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export const metadata: Metadata = {
  title: "Kyrox - About Us",
  description: "About the origins of the Kyrox minecraft server and time line.",
};

const AboutUs: FC = () => {
  return (
    <main className="flex h-screen items-center justify-center">
      <h1 className="text-center text-3xl">
        <TextGenerateEffect words={"The section is under development..."} />
      </h1>
    </main>
  );
};

export default AboutUs;
