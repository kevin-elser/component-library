import { MaskedImageProps } from './types';
import Image from 'next/image';

export const MaskedImage = ({
  variant,
  cornerDirection,
  color,
  src,
  alt,
  className = '',
  width = 300,
  height = 300,
  responsive = true
}: MaskedImageProps) => {
  const maskId = `mask-${variant}-${cornerDirection}`;

  const getBasePath = () => {
    if (variant === 'circle') {
      const radius = width / 2;
      const cx = width / 2;
      const cy = height / 2;
      return `M${cx} ${cy} m-${radius} 0 a${radius} ${radius} 0 1 0 ${radius*2} 0 a${radius} ${radius} 0 1 0 -${radius*2} 0`;
    } else {
      const rx = width / 2;
      const ry = height / 2;
      const cx = width / 2;
      const cy = height / 2;
      return `M${cx} ${cy} m-${rx} 0 a${rx} ${ry} 0 1 0 ${rx*2} 0 a${rx} ${ry} 0 1 0 -${rx*2} 0`;
    }
  };

  const getCornerPath = () => {
    const quadrantWidth = width / 2;
    const quadrantHeight = height / 2;
    
    switch (cornerDirection) {
      case 'top-left':
        return `M0 0h${quadrantWidth}v${quadrantHeight}H0z`;
      case 'top-right':
        return `M${quadrantWidth} 0h${quadrantWidth}v${quadrantHeight}h-${quadrantWidth}z`;
      case 'bottom-left':
        return `M0 ${quadrantHeight}h${quadrantWidth}v${quadrantHeight}H0z`;
      case 'bottom-right':
        return `M${quadrantWidth} ${quadrantHeight}h${quadrantWidth}v${quadrantHeight}h-${quadrantWidth}z`;
    }
  };

  const containerClasses = [
    'relative block',
    className
  ].filter(Boolean).join(' ');

  return (
    <div 
      className={containerClasses}
      style={{ 
        width: `${width}px`,
        height: `${height}px`,
        maxWidth: responsive ? '100%' : undefined
      }}
    >
      <svg 
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <defs>
          <mask id={maskId}>
            <rect width={width} height={height} fill="black" />
            <path d={getBasePath()} fill="white" />
            <path d={getCornerPath()} fill="white" />
          </mask>
        </defs>
        <rect 
          width={width} 
          height={height} 
          fill={color} 
          mask={`url(#${maskId})`}
        />
      </svg>

        <div 
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          mask: `url(#${maskId})`,
          WebkitMask: `url(#${maskId})`
        }}
      >
          <Image
            src={src}
            alt={alt}
            fill
          sizes={`(max-width: 640px) 100vw, ${width}px`}
            className="object-cover"
            priority
          />
      </div>
    </div>
  );
}; 