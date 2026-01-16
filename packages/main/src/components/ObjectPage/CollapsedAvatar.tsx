import AvatarSize from '@ui5/webcomponents/dist/types/AvatarSize.js';
import { useStylesheet } from '@ui5/webcomponents-react-base/internal/hooks';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import { cloneElement, useEffect, useMemo, useRef, useState } from 'react';
import { classNames, styleData } from './CollapsedAvatar.module.css.js';
import type { ObjectPagePropTypes } from './index.js';

export interface CollapsedAvatarPropTypes {
  image?: ObjectPagePropTypes['image'];
  imageShapeCircle?: ObjectPagePropTypes['imageShapeCircle'];
  style?: CSSProperties;
  hideCollapsedAvatar?: boolean;
}

export const CollapsedAvatar = (props: CollapsedAvatarPropTypes) => {
  const { image, imageShapeCircle, style, hideCollapsedAvatar } = props;
  useStylesheet(styleData, CollapsedAvatar.displayName);
  const [isMounted, setIsMounted] = useState(false);
  const domRef = useRef(null);

  const avatarContent = useMemo(() => {
    if (!image) return null;

    if (typeof image === 'string') {
      return (
        <span className={clsx(classNames.imageContainer, imageShapeCircle ? classNames.circle : undefined)}>
          <img className={classNames.image} src={image} alt="Object Page Image" />
        </span>
      );
    } else {
      return cloneElement(image, {
        size: AvatarSize.S,
        className: image.props?.className
          ? `${classNames.imageContainer} ${image.props?.className}`
          : classNames.imageContainer,
      } as unknown);
    }
  }, [image, imageShapeCircle]);

  useEffect(() => {
    // Trigger fade-in animation after mount
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  const containerClasses = clsx(
    classNames.base,
    isMounted ? classNames.visible : classNames.hidden,
    hideCollapsedAvatar ? classNames.notDisplayed : undefined,
  );

  return (
    <div
      ref={domRef}
      className={containerClasses}
      style={style}
      data-component-name="ObjectPageCollapsedAvatar"
      aria-hidden={hideCollapsedAvatar ? 'true' : 'false'}
    >
      {avatarContent}
    </div>
  );
};

CollapsedAvatar.displayName = 'CollapsedAvatar';
