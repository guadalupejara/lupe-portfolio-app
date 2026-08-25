'use client';

import { useRef } from "react";
import Ember from './sprites/Ember.png';
import { usePerimeterWalk } from './hooks/usePerimeterWalk';
import { useContainerBounds } from './hooks/useContainerBounds';
import { FRAME_SIZE } from './constants';
import { useWalkAnimation } from './hooks/useWalkAnimation';

function Cats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bounds = useContainerBounds(containerRef);
  const { location, facing, movementPhase, spriteTransform } = usePerimeterWalk(bounds);
  const currentFrame = useWalkAnimation(movementPhase);

  const spriteStyle: React.CSSProperties = {
    width: `${FRAME_SIZE}px`,
    height: `${FRAME_SIZE}px`,
    backgroundImage: `url(${Ember.src})`,
    backgroundPosition: `0px -${currentFrame * FRAME_SIZE}px`,
    backgroundRepeat: "no-repeat",
    imageRendering: "pixelated",
    transform: spriteTransform,
  };

  return (
    <div ref={containerRef} className="relative w-full h-full">
      <div
        style={{
          position: "absolute",
          left: `calc(50% + ${location.x}px)`,
          top: `calc(50% + ${location.y}px)`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div style={spriteStyle} aria-label={`Cat facing ${facing}, ${movementPhase}`} role="img" />
      </div>
    </div>
  );
}

export default Cats;