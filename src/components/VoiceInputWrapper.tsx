import { ReactNode } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useVoiceInput } from '@/hooks/useVoiceInput';
import { cn } from '@/lib/utils';

interface VoiceInputWrapperProps {
  children: ReactNode;
  onTranscript: (text: string) => void;
  className?: string;
}

export const VoiceInputWrapper = ({ children, onTranscript, className }: VoiceInputWrapperProps) => {
  const { isListening, isSupported, startListening, stopListening } = useVoiceInput(onTranscript);

  if (!isSupported) {
    return <>{children}</>;
  }

  return (
    <div className={cn("relative", className)}>
      {children}
      <Button
        type="button"
        size="icon"
        variant={isListening ? "destructive" : "secondary"}
        className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
        onClick={isListening ? stopListening : startListening}
        title={isListening ? "Stop recording" : "Start voice input"}
      >
        {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
      </Button>
    </div>
  );
};
