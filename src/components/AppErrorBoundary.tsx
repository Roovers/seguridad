import { Component, type ErrorInfo, type ReactNode } from "react";

interface AppErrorBoundaryProps {
  children: ReactNode;
}

interface AppErrorBoundaryState {
  hasError: boolean;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AppErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Dashboard render error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="error-state" role="alert">
          <div className="glass-card">
            <span>Estado de la aplicación</span>
            <h1>No se pudo renderizar una sección</h1>
            <p>Recargá la página. Si el problema persiste, revisá la consola del navegador para identificar el componente afectado.</p>
            <button type="button" onClick={() => window.location.reload()}>Recargar aplicación</button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
