import { useState, useEffect } from 'react';
import { randomInt, mod } from '../lib/mathUtils';
import {
  getPositionOnPerimeter,
  getFacing,
  getSpriteTransform,
  getPerimeterTotal,
  Bounds,
  CatLocation,
  Facing,
} from '../lib/perimeterMath';
import { STEP, BURSTS, STEP_DELAY, PAUSE_RANGE, REVERSE_CHANCE } from '../constants';

export type MovementPhase = "walking" | "resting";

type PerimeterState = {
  progress: number;
  direction: 1 | -1;
};

type UsePerimeterWalkResult = {
  location: CatLocation;
  facing: Facing;
  movementPhase: MovementPhase;
  spriteTransform: string;
};

const pickBurstLength = (): number => {
  const types = Object.keys(BURSTS) as Array<keyof typeof BURSTS>;
  const chosenType = types[randomInt(0, types.length - 1)];
  const [min, max] = BURSTS[chosenType];
  return randomInt(min, max);
};

export function usePerimeterWalk(bounds: Bounds): UsePerimeterWalkResult {
  const [perimeterState, setPerimeterState] = useState<PerimeterState>({
    progress: 0,
    direction: 1,
  });
  const [movementPhase, setMovementPhase] = useState<MovementPhase>("resting");

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const perimTotal = getPerimeterTotal(bounds);

    const runBurst = (): void => {
      const stepsRemaining: number = pickBurstLength();

      setPerimeterState((prev) => {
        const shouldReverse = Math.random() < REVERSE_CHANCE;
        return shouldReverse ? { ...prev, direction: prev.direction === 1 ? -1 : 1 } : prev;
      });

      setMovementPhase("walking");

      const takeStep = (stepsLeft: number): void => {
        if (stepsLeft <= 0) {
          setMovementPhase("resting");
          const pauseDuration = randomInt(PAUSE_RANGE[0], PAUSE_RANGE[1]);
          timeoutId = setTimeout(runBurst, pauseDuration);
          return;
        }

        setPerimeterState((prev) => ({
          ...prev,
          progress: mod(prev.progress + STEP * prev.direction, perimTotal),
        }));

        timeoutId = setTimeout(() => takeStep(stepsLeft - 1), STEP_DELAY);
      };

      takeStep(stepsRemaining);
    };

    runBurst();

    return () => clearTimeout(timeoutId);
  }, [bounds]);

  const location = getPositionOnPerimeter(perimeterState.progress, bounds);
  const facing = getFacing(perimeterState.progress, perimeterState.direction, bounds);
  const spriteTransform = getSpriteTransform(perimeterState.progress, perimeterState.direction, bounds);

  return { location, facing, movementPhase, spriteTransform };
}