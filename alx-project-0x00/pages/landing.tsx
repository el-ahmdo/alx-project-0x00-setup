import Card from "@/components/card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title="Small Button" size="sm" rounded="rounded-sm" />
      <Button title="Medium Button" size="md" rounded="rounded-md" />
      <Button title="Large Button" size="lg" rounded="rounded-full" />
      <Button title="Default Button" />
    </div>
  );
};
export default Landing;
