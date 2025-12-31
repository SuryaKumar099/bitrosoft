import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect
} from "react";

const Carousel = forwardRef(({ items, autoPlay = true, delay = 3000 }, ref) => {
  const [index, setIndex] = useState(0);
  const total = items.length;

  const next = () =>
    setIndex((prev) => (prev === total - 1 ? 0 : prev + 1));

  const prev = () =>
    setIndex((prev) => (prev === 0 ? total - 1 : prev - 1));

  // 🔥 AUTO SLIDE
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(next, delay);
    return () => clearInterval(interval);
  }, [index, autoPlay, delay]);

  useImperativeHandle(ref, () => ({
    next,
    prev,
    goTo: (i) => setIndex(i)
  }));

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {items.map((item, i) => (
          <div key={i} className="w-full flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
});

export default Carousel;
