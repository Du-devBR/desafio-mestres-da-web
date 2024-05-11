import { useEffect, useState } from "react";

export function Characters() {
  const [teste, setTeste] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((dados) => setTeste(dados));
  }, []);

  console.log(teste);

  return (
    <>
      <h1>Characters</h1>

      <div>
        {teste.map((item: any) => (
          <div>
            <p key={item.id}>{item.title}</p>
            <img src={item.thumbnail} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
