import { useLayoutEffect } from "react";
import { gsap } from "@/utils/gsap";

export function useGsapContext(scopeRef, fn) {
  useLayoutEffect(() => {
    const el = scopeRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) return;

    const ctx = gsap.context(fn, el);
    return () => ctx.revert();
  }, [scopeRef, fn]);
}

