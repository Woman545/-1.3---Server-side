
export default async function ServerDemo() {
    const time = new Date().toISOString();
    console.log('Это сообщение появится в ТЕРМИНАЛЕ, а не в браузере');
    
    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
            <h1>Server Component</h1>
            <p>Время на сервере: {time}</p>
            <p style={{color: 'gray', fontSize: '0.9rem'}}>Откройте терминал, чтобы увидеть console.log</p>
        </div>
    );
}