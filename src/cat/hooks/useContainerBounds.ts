import { useState, useEffect, RefObject } from 'react';
import { Bounds } from '../lib/perimeterMath';
import { VIEWPORT_MARGIN } from '../constants';

const SSR_FALLBACK_BOUNDS: Bounds = { minX: -100, maxX: 100, minY: -60, maxY: 60 };

export function useContainerBounds(containerRef: RefObject<HTMLDivElement | null>): Bounds {
  const [bounds, setBounds] = useState<Bounds>(SSR_FALLBACK_BOUNDS);

  useEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const halfWidth = rect.width / 2 - VIEWPORT_MARGIN;
      const halfHeight = rect.height / 2 - VIEWPORT_MARGIN;

      setBounds({
        minX: -halfWidth,
        maxX: halfWidth,
        minY: -halfHeight,
        maxY: halfHeight,
      });
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    return () => resizeObserver.disconnect();
  }, [containerRef]);

  return bounds;
}