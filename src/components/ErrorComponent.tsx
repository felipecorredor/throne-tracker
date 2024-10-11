import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";

interface ErrorComponentProps {
  message: string;
  onRetry: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<NobleHouse[], Error>>;
}

const ErrorComponent = ({ message, onRetry }: ErrorComponentProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            ¡Ups! Algo salió mal
          </h2>
          <p className="text-center text-gray-600 mb-4">
            {message ||
              "Ocurrió un error inesperado. Por favor, inténtalo de nuevo."}
          </p>
          <button
            onClick={() => onRetry()}
            className="bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
