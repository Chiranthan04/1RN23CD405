import React, { useState } from 'react';

export default function App() {
  const [selectedStock, setSelectedStock] = useState('');
  const [lastMinutes, setLastMinutes] = useState(15);

  return (
    <div style={{ maxWidth: 500, margin: '40px auto', padding: 24, fontFamily: 'Arial, sans-serif', border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>Stock Price Viewer</h2>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="stock-select" style={{ display: 'block', marginBottom: 4 }}>Select Stock</label>
        <select
          id="stock-select"
          value={selectedStock}
          onChange={e => setSelectedStock(e.target.value)}
          style={{ width: '100%', padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        >
          <option value="">-- Select --</option>
        </select>
      </div>

      <div style={{ marginBottom: 24 }}>
        <label htmlFor="minutes-input" style={{ display: 'block', marginBottom: 4 }}>Last Minutes</label>
        <input
          id="minutes-input"
          type="number"
          min={1}
          max={60}
          value={lastMinutes}
          onChange={e => setLastMinutes(Math.max(1, Math.min(60, Number(e.target.value))))}
          style={{ width: 150, padding: 8, borderRadius: 4, border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: 12, fontWeight: 'bold' }}>
        {selectedStock
          ? `Price History for ${selectedStock} (Last ${lastMinutes} minutes)`
          : 'Select a stock to view price history'}
      </div>

      <div>No price data available.</div>
    </div>
  );
}