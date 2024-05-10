export function Tool({ tool, link, img }) {
  return (
    <a href={link} target="_BLANK">
      <img src={img} alt={tool} className="size-8 mx-1" />
    </a>
  );
}

export default function ToolLinks({ tools }) {
  return (
    <div className="flex flex-row">
      {tools.map(({ tool, link, img }) => (
        <Tool tool={tool} link={link} img={img} />
      ))}
    </div>
  );
}
