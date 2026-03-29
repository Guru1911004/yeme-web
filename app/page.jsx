export default function Home() {
    return (
        <main style={{
            minHeight: '100vh',
            backgroundColor: '#0C0B14',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
        }}>

            <h1 style={{
                fontFamily: 'YemeBold, sans-serif',
                fontSize: '56px',
                color: '#3B266F',
                letterSpacing: '-2px',
            }}>
                YEME
            </h1>

            <p style={{
                fontFamily: 'YemeMedium, sans-serif',
                fontSize: '18px',
                color: '#49BFFF',
            }}>
                Next.js is working
            </p>

            <p style={{
                fontFamily: 'YemeMedium, sans-serif',
                fontSize: '14px',
                color: '#8A8A9A',
            }}>
                Dark background ✓ &nbsp; Purple text ✓ &nbsp; Blue text ✓
            </p>

        </main>
    )
}