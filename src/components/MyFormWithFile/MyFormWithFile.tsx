import { useRef, useState } from "react";

export const MyFormWithFile: React.FC = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("fileInput", fileInput.current?.files?.[0].name);
    console.log("name", name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nameField">Name</label>
      <input
        id="nameField"
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="fileUpload">Upload file</label>
      <input id="fileUpload" type="file" ref={fileInput} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
