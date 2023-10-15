
import Prisoner from "./Prisoner";
export default function Hall({prisoners}) {

  return (
    <>
      <div className="container1">
        {prisoners.map((prisonier) => (
          <Prisoner key={prisonier.id} prisoner={prisonier} />
        ))}
      </div>
    </>
  );
}
