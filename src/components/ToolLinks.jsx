import protonMail from "../assets/protonMail.png";
import messenger from "../assets/messenger.png";

export function Tool({ tool, link, img }) {
  return (
    <a href={link} target="_BLANK">
      <img src={img} alt={tool} className="size-8 mx-1" />
    </a>
  );
}

export default function ToolLinks({ tools, links }) {
  let link = "mailto:wojciechjedra@proton.me";
  let link2 = "m.me";
  return (
    <div className="flex flex-row">
      <Tool tool="protonmail" img={protonMail} link={link} />
      <Tool toole="messenger" img={messenger} link={link2} />
    </div>
  );
}
