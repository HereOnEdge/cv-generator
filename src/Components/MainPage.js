import ContactMainPage from "./Pages/ContactMainPage";
import IntroPage from "./Pages/IntroPages";
import FinalPage from "./Pages/FinalPage";
import OthersMainPage from "./Pages/OtherMainPages";
import DescPage from "./Pages/DescriptionPage";
import SummaryPage from "./Pages/SummaryPages";
import {
  TopicContext,
  PageContext,
  DataContext,
  CompletedTopicsContext,
  CurrentPageNodeContext,
  CvDesignContext,
  ChangeStateContext,
  NavLinkContext,
  ChangeCvDesignContext,
  IsPreviewVisibleContext,
  ChangePreviewStateContext,
} from "../App";

export default function MainPage(props) {
  return (
    <DataContext.Provider value={props.data}>
      <TopicContext.Provider value={props.topic}>
        <PageContext.Provider value={props.page}>
          <ChangeStateContext.Provider value={props.changeState}>
            <CompletedTopicsContext.Provider value={props.completedTopics}>
              <CurrentPageNodeContext.Provider value={props.currentPageNode}>
                <CvDesignContext.Provider value={props.cvDesign}>
                  {props.topic === "final" ? (
                    <ChangeCvDesignContext.Provider
                      value={props.changeCvDesign}
                    >
                      <FinalPage />
                    </ChangeCvDesignContext.Provider>
                  ) : (
                    <IsPreviewVisibleContext.Provider
                      value={props.isPreviewVisible}
                    >
                      <ChangePreviewStateContext
                        value={props.changePreviewState}
                      >
                        {props.topic === "contact" ? (
                          <ContactMainPage />
                        ) : props.page === "intro" ? (
                          <IntroPage />
                        ) : props.topic === "description" ? (
                          <DescPage />
                        ) : (
                          <NavLinkContext.Provider value={props.navLink}>
                            {props.page === "main" ? (
                              <OthersMainPage
                                isPreviewVisible={props.isPreviewVisible}
                              />
                            ) : props.page === "summary" ? (
                              <SummaryPage />
                            ) : (
                              "where am I"
                            )}
                          </NavLinkContext.Provider>
                        )}
                      </ChangePreviewStateContext>
                    </IsPreviewVisibleContext.Provider>
                  )}
                </CvDesignContext.Provider>
              </CurrentPageNodeContext.Provider>
            </CompletedTopicsContext.Provider>
          </ChangeStateContext.Provider>
        </PageContext.Provider>
      </TopicContext.Provider>
    </DataContext.Provider>
  );
}
