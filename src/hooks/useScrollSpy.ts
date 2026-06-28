import { useEffect, useMemo, useState } from "react";

interface ScrollSpyResult<T extends string> {
  activeId: T;
  progress: number;
  goToSection: (id: T) => void;
  goToNextSection: () => void;
  goToPreviousSection: () => void;
}

export function useScrollSpy<T extends string>(sectionIds: readonly T[]): ScrollSpyResult<T> {
  const [activeId, setActiveId] = useState<T>(sectionIds[0]);
  const [progress, setProgress] = useState(0);

  const sectionIndex = useMemo(() => {
    return sectionIds.reduce<Record<string, number>>((acc, id, index) => {
      acc[id] = index;
      return acc;
    }, {});
  }, [sectionIds]);

  useEffect(() => {
    const updateState = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(documentHeight <= 0 ? 0 : Math.min(100, Math.max(0, (window.scrollY / documentHeight) * 100)));

      const viewportAnchor = Math.max(120, window.innerHeight * 0.24);
      const current = sectionIds
        .map((id) => ({ id, element: document.getElementById(id) }))
        .filter((item): item is { id: T; element: HTMLElement } => Boolean(item.element))
        .reduce<T>((candidate, item) => {
          const top = item.element.getBoundingClientRect().top;
          return top <= viewportAnchor ? item.id : candidate;
        }, sectionIds[0]);

      setActiveId(current);
    };

    updateState();
    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState);
    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, [sectionIds]);

  const goToSection = (id: T) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToNextSection = () => {
    const index = sectionIndex[activeId] ?? 0;
    const next = sectionIds[Math.min(sectionIds.length - 1, index + 1)];
    goToSection(next);
  };

  const goToPreviousSection = () => {
    const index = sectionIndex[activeId] ?? 0;
    const previous = sectionIds[Math.max(0, index - 1)];
    goToSection(previous);
  };

  return { activeId, progress, goToSection, goToNextSection, goToPreviousSection };
}
