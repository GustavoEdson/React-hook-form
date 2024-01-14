interface RenderCount {
  content: number;
}

export default function RenderCount({ content }: RenderCount) {
  return <div>{content}</div>;
}
