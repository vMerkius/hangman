import { Prop_Message } from "../models/props";

export function PrintWord({ message, messageColor }: Prop_Message) {
  return (
    <div>
      <div style={{ color: messageColor }}>{message}</div>
    </div>
  );
}
export default PrintWord;
