import React ,{useState} from 'react'
import Wave from "react-wavify"
import './Footer.css'

const WaveWrap = (p) => (
  <Wave
    className="wave"
    style={{ zIndex: p.z, opacity: 0.7 }}
    options={p.options}
    fill="#FE914E"
  />
);

const Footer = () => {
  const [active, setActive] = useState(false);
  setTimeout(() => setActive(!active), 3000);
  return (
   
      <>
      <WaveWrap z={0} active={active} options={{ height: 40 , amplitude :100 , points : 3 }} />
      <WaveWrap
        z={1}
        active={active}
        options={{ height: 20, amplitude:10, speed: 0.4, points: 4 }}
      />
      </>

  )
}

export default Footer
