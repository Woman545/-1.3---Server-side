'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function ActionsDemo() {
    const [message, setMessage] = useState('');

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Server Actions Demo</h1>
            <button 
                onClick={async () => {
                    const result = await greet('Студент');
                    setMessage(result);
                }}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginBottom: '10px' }}
            >
                Поздороваться
            </button>
            <p style={{ fontWeight: 'bold', color: 'green' }}>{message}</p>
        </div>
    );
}