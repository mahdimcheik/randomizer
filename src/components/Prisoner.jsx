export default function Prisoner({prisoner}) {
  return (
    <>
      <div className="card ">
        <div
          style={{
            backgroundImage: `url("https://placehold.co/200x300/EEE/31343C")`,
            width: `100px`,
            height: `100px`,
            backgroundSize: `100%`,
            backgroundPosition: `center`,
            backgroundRepeat: `no-repeat`,
          }}
          className="card-img-top"
        >
        </div>
        <h5 style={{paddingTop: "5px"}}>{prisoner.sex === 'm' ? "Prisonnier" : "Prisonnière"}</h5>
        <p>{prisoner.name}</p>
      </div>
    </>
  );
}
