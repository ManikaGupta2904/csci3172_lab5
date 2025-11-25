import React from 'react';
import { Link } from 'react-router-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error:', error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false });
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card p-4">
                                <div className="text-center">
                                    <h2 className="text-danger mb-3">Something went wrong</h2>
                                    <p className="mb-4">Please try again or go back home.</p>
                                    <div className="d-flex justify-content-center gap-2">
                                        <button onClick={this.handleRetry} className="btn btn-primary">
                                            Try Again
                                        </button>
                                        <Link to="/" className="btn btn-secondary">
                                            Go Home
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;