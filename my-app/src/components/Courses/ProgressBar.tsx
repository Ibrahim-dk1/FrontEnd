import { cn } from '@/lib/utils';

interface ProgressBarProps {
  progress: number;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ProgressBar({ progress, showLabel = true, size = 'md', className }: ProgressBarProps) {
  const heights = {
    sm: 'h-1.5',
    md: 'h-2',
    lg: 'h-3',
  };

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-muted-foreground">Progress</span>
          <span className="font-medium text-primary">{progress}%</span>
        </div>
      )}
      <div className={cn('progress-bar', heights[size])}>
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }} 
        />
      </div>
    </div>
  );
}