import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackageList';
import { Stats } from './Stats';

const initialItems = [
  {
    id: 1,
    description: 'Passports',
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: 'Socks',
    quantity: 12,
    packed: false,
  },
  {
    id: 3,
    description: 'Charger',
    quantity: 1,
    packed: false,
  },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItem(item) {
    setItems((prev) => [...prev, item]);
  }

  function handleDeleteItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }

  function handleClearItems() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?'
    );
    if (!confirmed) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
