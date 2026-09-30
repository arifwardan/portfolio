import { describe, expect, it } from "vitest";
import {
  EXPERIENCES,
  EXPERIMENTS,
  PROBLEMS_SOLVED,
  PROFILE,
  PROJECTS,
  SKILL_GROUPS,
  SOCIALS,
  SYSTEM_SUMMARY,
} from "./content";

describe("portfolio content", () => {
  it("has a complete profile", () => {
    for (const value of Object.values(PROFILE)) {
      expect(value.trim().length).toBeGreaterThan(0);
    }
  });

  it("lists experience with impact bullets", () => {
    expect(EXPERIENCES.length).toBeGreaterThan(0);
    for (const experience of EXPERIENCES) {
      expect(experience.period.trim()).not.toBe("");
      expect(experience.role.trim()).not.toBe("");
      expect(experience.organization.trim()).not.toBe("");
      expect(experience.bullets.length).toBeGreaterThan(0);
    }
  });

  it("presents skills as an ecosystem, never as problem solving", () => {
    expect(SKILL_GROUPS.length).toBeGreaterThanOrEqual(4);
    const forbidden = /problem[\s-]*solving/i;
    for (const group of SKILL_GROUPS) {
      expect(group.label.trim()).not.toBe("");
      expect(group.items.length).toBeGreaterThan(0);
      for (const item of group.items) {
        // PRD invariant: the incident experience tells this story instead.
        expect(item).not.toMatch(forbidden);
      }
    }
  });

  it("defines unique, linkable projects", () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const project of PROJECTS) {
      expect(project.name.trim()).not.toBe("");
      expect(project.description.trim()).not.toBe("");
      expect(project.stack.length).toBeGreaterThan(0);
      expect(["Building", "Shipped", "Maintaining"]).toContain(project.status);
      expect(project.links.length).toBeGreaterThan(0);
      for (const link of project.links) {
        expect(link.label.trim()).not.toBe("");
        expect(link.href.trim()).not.toBe("");
      }
    }
  });

  it("backs hacker mode with evidence lists", () => {
    expect(PROBLEMS_SOLVED.length).toBeGreaterThan(0);
    expect(EXPERIMENTS.length).toBeGreaterThan(0);
    for (const experiment of EXPERIMENTS) {
      expect(experiment.name.trim()).not.toBe("");
      expect(experiment.stack.trim()).not.toBe("");
    }
    expect(SYSTEM_SUMMARY.projects).toBeGreaterThan(0);
    expect(SYSTEM_SUMMARY.systems).toBeGreaterThan(0);
    expect(SYSTEM_SUMMARY.failures).toBeGreaterThan(0);
    expect(SYSTEM_SUMMARY.status.trim()).not.toBe("");
  });

  it("links socials to real URL shapes", () => {
    expect(SOCIALS.length).toBeGreaterThan(0);
    for (const social of SOCIALS) {
      expect(social.href.startsWith("https://") || social.href.startsWith("mailto:")).toBe(true);
    }
  });
});
