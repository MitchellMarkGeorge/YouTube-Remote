import { Socket } from "socket.io-client";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

const config: Config = {
  dictionaries: [adjectives, colors, animals],
  separator: "-",
  length: 3,
};

export function getUniqueRoomName() {
  return uniqueNamesGenerator(config);
}

interface BackgroundState {
  socket?: typeof Socket;
  
}

// export class StateManager {
//   state: BackgroundState;
//   constructor(initalState?: BackgroundState) {
//     if (initalState) {
//       this.state = initalState;
//     }
//   }

//   updateState(updates: BackgroundState): void {
//     Object.assign(this.state, updates);
//   }

//   getStateCopy(): BackgroundState {
//     return Object.assign({}, this.state);
//   }
// }
