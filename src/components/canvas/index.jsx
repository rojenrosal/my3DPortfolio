import { lazy, Suspense } from "react";

const SuspenseFallback = () => (
  <div className="w-full h-full" aria-hidden="true" />
);

const lazyCanvas = (loader) => {
  const LazyComponent = lazy(loader);
  const Wrapped = (props) => (
    <Suspense fallback={<SuspenseFallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
  return Wrapped;
};

const EarthCanvas = lazyCanvas(() => import("./Earth"));
const BallCanvas = lazyCanvas(() => import("./Ball"));
const ComputersCanvas = lazyCanvas(() => import("./Computers"));
const StarsCanvas = lazyCanvas(() => import("./Stars"));

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };
