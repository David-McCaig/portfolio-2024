'use client'
import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";

import { TransitionEffect } from "@/lib/transition-effect";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links } = project;
  const { transitionRef, determineTransitionType } = TransitionEffect();
  return (
    <Card style={determineTransitionType("translateY(0px)")} className="flex flex-col">
      <CardHeader>
        {image && (
          <Link href={href || image} target="_blank">
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top"
            />
          </Link>
        )}
      </CardHeader>
      <CardContent ref={transitionRef} className="flex flex-col gap-2">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <Markdown className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.slice().sort().map((tag) => (
              <Badge
                key={tag}
                className="px-2 py-0 text-sm"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
     {links && links.length > 0 && (
  <div className="flex flex-row flex-wrap items-start gap-1">
    {links.slice().sort((a, b) => b.name.localeCompare(a.name)).map((link, idx) => (
      <Link href={link?.href} key={idx} target="_blank">
        <Badge className="flex gap-2 px-2 py-1 text-sm">
          <Icon name={link.icon} className="size-3" />
          {link.name}
        </Badge>
      </Link>
    ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
