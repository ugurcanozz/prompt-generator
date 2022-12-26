import * as React from "react";
import "./style.css";
import rowDatas from "./prompts";
import { IPromptRow } from "./prompts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div>
      <DreamBoothPrompter />
    </div>
  );
}

export function DreamBoothPrompter() {
  const [instancePrompt, setInstancePrompt] =
    React.useState<string>("sallyman");
  const [classPrompt, setClassPrompt] = React.useState<string>("person");
  const [generalPrefix, setGeneralPrefix] = React.useState<string>("");
  const [generalSuffix, setGeneralSuffix] = React.useState<string>("");

  return (
    <main>
      <ToastContainer autoClose={1000} hideProgressBar={true} />

      <header>Salman’s starter DreamBooth prompts!</header>

      <div className="inputFields">
        <label>instance prompt</label>
        <input
          value={instancePrompt}
          onChange={(e) => setInstancePrompt(e.target.value)}
        />
        <label>class prompt</label>
        <input
          value={classPrompt}
          onChange={(e) => setClassPrompt(e.target.value)}
        />

        <label>general prefix</label>
        <input
          value={generalPrefix}
          onChange={(e) => setGeneralPrefix(e.target.value)}
        />
        <label>general suffix</label>
        <input
          value={generalSuffix}
          onChange={(e) => setGeneralSuffix(e.target.value)}
        />
      </div>

      <section className="promptRows">
        {rowDatas.map((rowData) => (
          <PromptRow
            rowData={rowData}
            instancePrompt={instancePrompt}
            classPrompt={classPrompt}
            prefix={generalPrefix}
            suffix={generalSuffix}
          />
        ))}
      </section>
    </main>
  );
}

interface PromptRowProps {
  rowData: IPromptRow;
  instancePrompt: string;
  classPrompt: string;
  prefix: string;
  suffix: string;
}

function PromptRow(props: PromptRowProps) {
  const { rowData, instancePrompt, classPrompt, prefix, suffix } = props;
  const finalText =
    prefix +
    makeSubstitutions(rowData.rawText, instancePrompt, classPrompt) +
    suffix;

  return (
    <div
      className="promptRow"
      key={rowData.id}
      onClick={() => copyToClipboard(finalText)}
    >
      <div>{rowData.id}</div>
      <div className="promptText">{finalText}</div>
      <button onClick={() => copyToClipboard(finalText)}>copy</button>
    </div>
  );
}

function makeSubstitutions(
  rawStr: string,
  instancePrompt: string,
  classPrompt: string
): string {
  return rawStr
    .replace("{INSTANCE_PROMPT}", instancePrompt)
    .replace("{CLASS_PROMPT}", classPrompt);
}

function copyToClipboard(str: string): void {
  navigator.clipboard.writeText(str);
  toast("copied: " + str);
}
