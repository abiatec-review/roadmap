import ButtonsField from "./components/ButtonsField";
import InputsField from "./components/InputsField";
import AppProvider from "./utils/AppProvider";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  return (
    <div className="App">
        <ErrorBoundary >
            <AppProvider>
                <ButtonsField />
                <InputsField/>
            </AppProvider>
        </ErrorBoundary>
    </div>
  );
}

export default App;
