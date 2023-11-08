import {RefObject, useEffect, useState} from "react";

const useIntersectionObserver = (
    targetRef: RefObject<Element>,
    options: IntersectionObserverInit = {
      threshold: 0,
      root: null,
      rootMargin: '0px'
    }

): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>()
  const isIntersecting = entry?.isIntersecting;

  const updateEntry = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setEntry(entry)
  }

  useEffect(() => {
    const target = targetRef?.current;

    if (isIntersecting || !target) return;

    const observer = new IntersectionObserver(updateEntry, options);
    observer.observe(target);

    return () =>
      observer.disconnect()
  }, [isIntersecting, options, options.root, options.rootMargin, options.threshold, targetRef]);

  return entry
}

export default useIntersectionObserver;