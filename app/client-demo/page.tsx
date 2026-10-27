'use client';

import { useState } from 'react';

export default function ClientDemo() {
    const [count, setCount] = useState(0);
    console.log('Это сообщение появится в КОНСОЛИ БРАУЗЕРА (F12)');
    
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Client Component</h1>
            <button 
                onClick={() => setCount(count + 1)}
                style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
            >
                Кликов: {count}
            </button>
        </div>
    );
}