import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Pen', price: 10 },
    { id: 2, name: 'Book', price: 50 }
  ]);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [id, setId] = useState(null);

  function edit(p) {
    setId(p.id);
    setName(p.name);
    setPrice(p.price);
  }

  function update(e) {
    e.preventDefault();

    setProducts(products.map(p =>
      p.id === id ? { ...p, name, price } : p
    ));

    setId(null);
    setName('');
    setPrice('');
  }

  return (
    <div className="bg-blue-50 min-h-screen p-6">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">

        <h1 className="text-2xl font-bold text-blue-600 text-center mb-5">
          Product Management
        </h1>

        {products.map(p => (
          <div key={p.id}
            className="bg-blue-100 p-3 mb-3 rounded flex justify-between">
            <span>{p.name} - ₹{p.price}</span>
            <button
              onClick={() => edit(p)}
              className="bg-blue-600 text-white px-3 py-1 rounded">
              Edit
            </button>
          </div>
        ))}

        <form onSubmit={update} className="mt-5">
          <input
            className="border p-2 w-full mb-3 rounded"
            placeholder="Product Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />

          <input
            className="border p-2 w-full mb-3 rounded"
            type="number"
            placeholder="Product Price"
            value={price}
            onChange={e => setPrice(e.target.value)}
            required
          />

          <button
            disabled={id === null}
            className="bg-green-600 text-white p-2 w-full rounded disabled:bg-gray-400">
            Update Product
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;