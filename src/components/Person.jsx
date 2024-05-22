export function Tool({ tool, link, img }) {
  return (
    <a href={link} target="_BLANK">
      <img src={img} alt={tool} className="size-8 mx-1" />
    </a>
  );
}

export function ToolLinks({ tools }) {
  return (
    <div className="flex flex-row">
      {tools.map(({ tool, link, img }) => (
        <Tool tool={tool} link={link} img={img} key={tool} />
      ))}
    </div>
  );
}

export default function Person({ children }) {
  const tools = [
    { tool: "protonmail", link: "mailto:wjedra89@gmail.com", img: protonMail },
    { tool: "messenger", link: "https://m.me", img: messenger },
  ];
  return (
    <div className="flex flex-col text-lg">
      <span>{children}</span>
      <div className="flex">
        <ToolLinks tools={tools} />
      </div>
    </div>
  );
}
