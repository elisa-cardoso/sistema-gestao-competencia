import { React } from "react";

import PageContainer from "../../components/PageContainer";
import PageHeaderContainer from "../../components/PageHeaderContainer";
import PageContentContainer from "../../components/PageContentContainer";

import { ContainerWithSidebar } from "../../components/ContainerWithSidebar";
import ButtonRoutes from "../../components/ButtonRoutes";
import { useNavigate } from "react-router-dom";

function TelaBiblioteca({
  HandledarkMode,
  isDarkMode,
  decreaseFontSize,
  increaseFontSize,
  logOut,
}) {

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
   };


  return (
    <ContainerWithSidebar
      increaseFontSize={increaseFontSize}
      decreaseFontSize={decreaseFontSize}
      HandledarkMode={HandledarkMode}
      isDarkMode={isDarkMode}
      logOut={logOut}
    >
      <PageContainer>
        <PageHeaderContainer title={`Sistema Biblioteca`} />
        <PageContentContainer>

          <ButtonRoutes buttonText="Domínio" onClick={() => navigateTo("/")} />
          <ButtonRoutes buttonText="Categoria" onClick={() => navigateTo("/")} />
          <ButtonRoutes buttonText="Conhecimento" onClick={() => navigateTo("/")} />

        </PageContentContainer>
      </PageContainer>
    </ContainerWithSidebar>
  );
}

export default TelaBiblioteca;