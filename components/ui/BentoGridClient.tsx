"use client";

import dynamic from "next/dynamic";

export const BentoGrid = dynamic(
    () => import("./BentoGrid").then(mod => mod.BentoGrid),
    { ssr: false }
);

export const BentoGridItem = dynamic(
    () => import("./BentoGrid").then(mod => mod.BentoGridItem),
    { ssr: false }
);
