import { Route, Routes } from "react-router-dom"
import TelaInicial from "../../pages/TelaInicial"
import TelaBiblioteca from "../../pages/TelaBiblioteca"



export const CommonPrivateRoutes = ({
    HandledarkMode,
    isDarkMode,
    decreaseFontSize,
    increaseFontSize,
    handleOpenModal
  }) => {
    return (
        <Routes>
            <Route
              path="/"
              element={
                <TelaInicial
                  increaseFontSize={increaseFontSize}
                  decreaseFontSize={decreaseFontSize}
                  HandledarkMode={HandledarkMode}
                  isDarkMode={isDarkMode}
                  logOut={handleOpenModal}
                />
              }
            />
            <Route
            path="/biblioteca"
            element={
            <TelaBiblioteca
              increaseFontSize={increaseFontSize}
              decreaseFontSize={decreaseFontSize}
              HandledarkMode={HandledarkMode}
              isDarkMode={isDarkMode}
              logOut={handleOpenModal}
              />
            }
              />

        </Routes>
    )
}