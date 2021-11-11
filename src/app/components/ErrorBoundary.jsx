// External Dependencies
import React from 'react';

/**
 * Error Boundary component wraps any component in an error boundary so the app doesnt crash
 */
export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
      info: '',
    };
  }

  // Set the state with the error message and details
  componentDidCatch(error, info) {
    this.setState({
      error,
      info,
    });
  }

  render() {
    // Pull out the error state
    const { error, info } = this.state;

    // Render the error details if the component has thrown an error
    if (info) {
      const errorDetails =
        process.env.NODE_ENV === 'development' ? (
          <details className="preserve-space">
            {error && error.toString()}
            <br />
            {info.componentStack}
          </details>
        ) : undefined;
      return (
        <div>
          <h2 className="error">An unexpected error has occurred in the {this.props.component} component.</h2>
          {errorDetails}
        </div>
      );
    }

    // Default to rendering the component
    return this.props.children;
  }
}
