interface Props {
  title: string;
  description: string;
}
export default function SectionHeader({ title, description }: Props) {
  return (
    <div className="py-6 md:flex justify-between items-center">
      <h1 className="font-semibold text-3xl md:text-4xl md:basis-1/2">
        {title}
      </h1>
      <p className="text-sm md:text-base text-muted-foreground md:basis-1/2">
        {description}
      </p>
    </div>
  );
}
