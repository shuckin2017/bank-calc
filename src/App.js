import React, { useState } from "react";
import Button from "./components/Button";
import ContentBlock from "./components/ContentBlock";
import { Loading } from "./components/Loading/Loading";
import "./styles.scss";

export default function App() {
  const [pageState, setPageState] = useState({ hidden: false, loading: false });
  const loadingPage = () => {
    setPageState({ hidden: true, loading: true });
    setTimeout(() => {
      setPageState({ hidden: true, loading: false });
    }, 500);
  };
  return (
    <div className={!pageState.hidden ? "app app--hidden" : " app app--active"}>
      {pageState.loading ? (
        <Loading />
      ) : (
        <div className="inner">
          {!pageState.hidden && (
            <Button
              className="btn-default btn-transporent"
              label="Налоговый вычет"
              onClick={loadingPage}
            />
          )}
          {pageState.hidden && <ContentBlock stateApp={setPageState} />}
        </div>
      )}
    </div>
  );
}
