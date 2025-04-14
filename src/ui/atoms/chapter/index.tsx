export const Chapter = ({
  className,
  index,
}: {
  className: string;
  index: number;
}) => {
  return <div className={className}>第 {index} 章</div>;
};
