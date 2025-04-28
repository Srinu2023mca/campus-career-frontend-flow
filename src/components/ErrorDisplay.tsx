
interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay = ({ message }: ErrorDisplayProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="text-destructive text-xl mb-4">Something went wrong</div>
      <p className="text-muted-foreground mb-4">{message}</p>
      <button 
        onClick={() => window.location.reload()} 
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorDisplay;
