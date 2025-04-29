export const BigList = () => {
    const stuff = Array(1000).fill("stuff");
    return (
      <ul>
        {stuff.map((item, index) => (
          <li key={index}>
            {item}
          </li>
        ))}
      </ul>
    )
  }
  