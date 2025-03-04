import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/Button";
import { TechStack } from "@/components/TechStack";
import { ArrowDownRight, ArrowRightIcon, FileDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LIMIT = 2; // max show 2

export default async function Home() {
  return (
    <article className="mt-8 flex flex-col gap-16 pb-16 max-w-3xl">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/david-mccaig.webp"
          alt="Photo of Ted"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hi Dave here 👋</h1>
          <p className="mt-2 font-light">
            Hi I&apos;m Dave, A front-end React developer who
            has a passion for creating beautiful UI and enjoyable user
            experiences. When I&apos;m not programming you can usually find me racing down mountain bike trails, experimenting with new sounds on my synthesizers, or walking  with my Australian Shepherd, Ariel.{" "}
          </p>
          <div className="mt-4 flex items-end gap-1">
            <p className="font-semibold">Ask the AI model anything about me</p>
            <ArrowDownRight className="size-5 animate-bounce" />
          </div>
          <section className="mt-8 flex items-center gap-8">
            <Link href="/resume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />
      <TechStack />
      <section className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h2 className="title text-2xl sm:text-3xl">Featured Projects</h2>
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
        <Projects limit={LIMIT} />
      </section>
    </article>
  );
}
