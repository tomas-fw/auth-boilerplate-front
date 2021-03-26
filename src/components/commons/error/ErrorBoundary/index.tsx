import React from "react";

interface Props {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<{}, Props> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    // Update state so the next render will show the fallback UI.
    console.error("getDerivedStateFromError", error);
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    const payload = {
      stack: error?.stack.slice(0, 9997).concat("..."),
      message: error?.message.slice(0, 253).concat("..."),
      extra: errorInfo?.componentStack.slice(0, 9997).concat("..."),
    };

    console.log("Error Payload: ", payload);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
