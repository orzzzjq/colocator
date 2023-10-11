import { FormEvent, ChangeEvent } from "react";

interface Props {
  handleChange: (s: string) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

function Passcode({ handleChange, handleSubmit }: Props) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        className="form-control"
        id="passcode"
        style={{ margin: "20px" }}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      />
      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
}

export default Passcode;
