import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  return (
    <div className="absolute inset-0">
      <Particles
        className="absolute inset-0"
        params={{
          particles: {
            number: {
              value: 40,
              density: {
                enable: false,
                value_area: 2000,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 2,
              },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.2,
              width: 0.5,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              attract: {
                enable: true,
                rotateX: 5000,
                rotateY: 1200,
              },
            },
          },
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
