import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjects } from "@/lib/projectsData";
import ProjectDetailView from "@/components/ProjectDetailView";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const projects = getAllProjects();
  const slugParams = projects.map((p) => ({ id: p.slug }));
  const idParams = projects.map((p) => ({ id: p.id }));
  return [...slugParams, ...idParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.id);

  if (!project) {
    return {
      title: "Project Not Found | Aditya Shastri",
    };
  }

  return {
    title: `${project.title} | Aditya Shastri Portfolio`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ProjectDetailView project={project} />;
}
