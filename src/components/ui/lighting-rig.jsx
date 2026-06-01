export function LightingRig({ ambient = 0.85 }) {
  return (
    <>
      <ambientLight intensity={ambient} />
      <directionalLight position={[3, 6, 5]}   intensity={1.5} color="#ffffff" />
      <directionalLight position={[-3, 2, -2]}  intensity={0.4} color="#d4ffcc" />
      <pointLight       position={[0, -3, 2]}   intensity={0.3} color="#4ca706" />
    </>
  )
}
