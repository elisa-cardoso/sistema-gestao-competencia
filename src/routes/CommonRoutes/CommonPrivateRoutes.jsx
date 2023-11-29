import { Route, Routes } from "react-router-dom"
import TelaInicial from "../../pages/TelaInicial"

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
        </Routes>
    )
}