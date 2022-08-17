//keep all reusable form componets here
function LabelInput({
  label,
  placeholder,
  onChange,
  value,
  optionalLabel,
  prefix,
}) {
  return (
    <div className="custom-label-input">
      <div className="flex">
        <div className="custom-label-input--label">{label}</div>
        {optionalLabel && (
          <div className="custom-label-input--label optional">(optional)</div>
        )}
      </div>
      {(!prefix && (
        <input
          className="custom-label-input--text"
          type="text"
          placeholder={placeholder || label}
          onChange={onChange}
          value={value || ""}
        />
      )) || (
        <div className="flex ">
          <div className="flex input-prefix align-center">{prefix}</div>
          <input
            className="custom-label-input--text prefix-input"
            type="text"
            placeholder={placeholder || label}
            onChange={onChange}
            value={value || ""}
          />
        </div>
      )}
    </div>
  );
}
function WelcomeInfo({ header, description }) {
  return (
    <div className="welcome-info">
      <div className="welcome-info_h1">{header}</div>
      <div className="welcome-info_h3 font-16">{description}</div>
    </div>
  );
}

function Submit({ name, click }) {
  return (
    <div
      className="submit-btn align-center flex justify-content-center"
      onClick={click}>
      {name}
    </div>
  );
}

function Card({ logo, header, description, selected = false, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`card flex flex-col gap-5 padding-10 ${
        selected && "card-selected"
      }`}>
      <img src={logo} width="40px" alt={header} />
      <strong className="font-18">{header}</strong>
      <div className="font-16">{description}</div>
      <div></div>
    </div>
  );
}
function FormWrapper({ children }) {
  return <div className="welcome-form">{children}</div>;
}
export { Submit, LabelInput, WelcomeInfo, Card, FormWrapper };
