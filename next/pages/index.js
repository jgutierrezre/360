import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import styles from '@/styles/App.module.css'

// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
const ReactPhotoSphereViewer = dynamic(
  () =>
    import('react-photo-sphere-viewer').then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

export default function Home() {  
  return (
    <div className={"styles.App"}>
      <ReactPhotoSphereViewer src="360.png" height={'100vh'} width={"100%"}></ReactPhotoSphereViewer>
    </div>
  );
}