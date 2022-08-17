import "./App.css";
import logo from "./assets/logo.png";
import OnboardingForm from "./onboarding-forms";
function App() {
  return (
    <div className="onboarding flex">
      <div className="onboarding-process flex flex-col">
        <span className="onboarding-process_header align-center flex justify-content-center ">
          <img src={logo} width="50px" alt="Eden" /> Eden
        </span>
        <OnboardingForm />
      </div>
    </div>
  );
}

export default App;
