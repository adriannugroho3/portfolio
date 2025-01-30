
import create from "zustand";



// export const useGameStore = create((set) => ({
//   level: null,
//   currentStage: 0,
//   currentKana: null,
//   mode: "hiragana",
//   startGame: () => {
//     const level = generateGameLevel({ nbStages: 5 });
//     const currentKana = level[0].find((kana) => kana.correct);
//     set({ level, currentStage: 0, currentKana });
//   },
//   nextStage: () => {
//     set((state) => {
//       const currentStage = state.currentStage + 1;
//       const currentKana = state.level[currentStage].find(
//         (kana) => kana.correct
//       );
//       return { currentStage, currentKana };
//     });
//   },
// }));

export const useGameStore = create((set) => ({
    level: null,
    currentStage: 0,
    currentKana: null,
    mode: "hiragana",
    startGame: () => {
      
     
      // set({ level, currentStage: 0, currentKana });
    },
    nextStage: () => {
      set((state) => {
        const currentStage = state.currentStage + 1;
        const currentKana = state.level[currentStage].find(
          (kana) => kana.correct
        );
        return { currentStage, currentKana };
      });
    },
  }));