export default function Home() {
  return (
    <>
      <div style={styles.container}>
        <h1 style={styles.welcomeText}>Parkinson and Alzheimer detector helper</h1>
      </div>
    </>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    margin: 0,
  },
  welcomeText: {
    fontSize: '64px',
    color: '#333',
    fontFamily: 'Arial, sans-serif',
  },
};