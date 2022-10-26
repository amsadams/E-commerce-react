// import React from "react";
// import Particles from "react-particles";
// import  { Engine } from "tsparticles-engine";
// import { loadSeaAnemonePreset } from "tsparticles-preset-sea-anemone";

// export class ParticlesContainer extends React.PureComponent<IProps> {
//   // this customizes the component tsParticles installation
//   async customInit(engine: Engine): Promise<void> {
//     // this adds the preset to tsParticles, you can safely use the
//     await loadSeaAnemonePreset(engine);
//   }

//   render() {
//     const options = {
//       preset: "seaAnemone",
//     };

//     return <Particles options={options} init={this.customInit} />;
//   }
// }