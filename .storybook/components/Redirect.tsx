import '@ui5/webcomponents-fiori/dist/illustrations/PageNotFound.js';
import { IllustratedMessage, Link, Text } from '@ui5/webcomponents-react';
import { useEffect, useState } from 'react';

interface RedirectProps {
  from: string;
  to: string;
  sectionName: string;
  /**
   * Delay in ms before redirecting
   * @default 5000
   */
  delay?: number;
}

export const Redirect = ({ from, to, sectionName, delay = 1000000 }: RedirectProps) => {
  const [countdown, setCountdown] = useState(Math.ceil(delay / 1000));

  const target = typeof window !== 'undefined' ? window.top || window.parent || window : null;
  const currentHref = target?.location.href ?? '';
  const newHref = currentHref.replace(from, to);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!currentHref.includes(from)) return;

    const timer = setTimeout(() => {
      target.location.replace(newHref);
    }, delay);

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdownInterval);
    };
  }, [from, to, delay, currentHref, newHref, target]);

  return (
    <IllustratedMessage
      name="PageNotFound"
      titleText="Page Moved"
      subtitle={
        <Text>
          This page has been moved to <strong>{sectionName}</strong>.
          <br />
          Redirecting in {countdown} seconds...
        </Text>
      }
    >
      <Link href={newHref} target="_top">
        Go to {sectionName}
      </Link>
    </IllustratedMessage>
  );
};
