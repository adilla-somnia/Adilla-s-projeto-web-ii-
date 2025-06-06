import React,{ useState, useEffect } from 'react';

function ListaProdutos({ onAdicionar }) {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(dados => {
        setProdutos(dados);
        setCarregando(false);
      })
      .catch(err => {
        console.error(err);
        setErro(err.message);
        setCarregando(false);
      });
  }, []);

  if (carregando) return <p>Carregando produtos...</p>;
  if (erro) return <p style={{ color: 'red' }}>Erro: {erro}</p>

  return (
    <div className="lista-produtos">
      <h2>Produtos</h2>
      <div className="grid-produtos">
        {produtos.map(produto => (
          <div key={produto.id} className="card-produto">
            <div id="card-produto-dentro">
            <img src={produto.image} alt={produto.title} />
            <h3>{produto.title}</h3>
            <p><strong>Categoria:</strong> {produto.category}</p>
            <p>R$ {produto.price.toFixed(2)}</p>
            <button onClick={() => onAdicionar(produto)}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProdutos;
