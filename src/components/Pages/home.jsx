import React, { useEffect, useState } from 'react';
import './home.css'

function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const styles = {
        container: {
            minHeight: '100vh', // Changed from height to minHeight
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            overflow: 'hidden'
        },
        header: {
            fontSize: '3rem',
            marginBottom: '0.5rem',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(-20px)',
            transition: 'opacity 1s ease-out, transform 1s ease-out',
            animation: 'float 5s ease-in-out infinite'
        },
        paragraph: {
            fontSize: '1.5rem',
            width: '60%',
            lineHeight: '1.5',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
            animation: 'float 5s ease-in-out infinite',
            animationDelay: '0.5s'
        }
    };

    return (
        <div id="home" style={styles.container}>
            <h1 style={styles.header}>Hello, I'm David...</h1>
            <p style={styles.paragraph}>
                I'm thrilled to have you here.
                This space is designed to give you a glimpse into my world—where you can learn about me, my skills,
                my projects, and the passions that drive me.
                Whether you're here to collaborate, connect, or just dropping by,
                I hope you find what you're looking for.
            </p>
        </div>
    );
}

export default Home;
