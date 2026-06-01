import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import * as THREE from 'three'

export function useNormalizedScene(url) {
  const { scene } = useGLTF(url)
  return useMemo(() => {
    const clone = scene.clone(true)

    if (clone.background !== undefined) clone.background = null
    if (clone.environment !== undefined) clone.environment = null

    clone.traverse(child => {
      if (child.isMesh) {
        const mats = Array.isArray(child.material) ? child.material : [child.material]
        mats.forEach(m => { if (m) m.side = THREE.DoubleSide })
      }
    })

    const box    = new THREE.Box3().setFromObject(clone)
    const center = box.getCenter(new THREE.Vector3())
    const size   = box.getSize(new THREE.Vector3())
    const maxDim = Math.max(size.x, size.y, size.z)

    const pivot = new THREE.Group()
    clone.position.sub(center)
    pivot.add(clone)
    pivot.scale.setScalar(2 / maxDim)

    return pivot
  }, [scene])
}
