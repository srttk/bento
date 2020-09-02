import React from 'react';
import Button from '@/components/ui/Button'

interface RequestError {
    message?:string
}

interface ErrorMessageProps {
    error: RequestError
    refresh?(): void | Promise<any> 
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, refresh }) => {

    return (
        <div className='error__message'>
            <h4 className="error__message--title">Error!</h4>
            <p className="error__message--description">{error.message || 'Error'}</p>
            { refresh && <Button className="button__small" onClick={() => refresh()}>Refresh</Button>}
        </div>
    )
}

export default ErrorMessage