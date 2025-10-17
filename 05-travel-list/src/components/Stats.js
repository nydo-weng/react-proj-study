export function Stats({ items }) {
  // const packedItemNum = items.reduce(
  //   (acc, item) => (item.packed ? acc + 1 : acc),
  //   0
  // );
  if (!items.length) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list! 🚀</em>
      </footer>
    );
  }

  const itemNum = items.length;
  const packedItemNum = items.filter((item) => item.packed).length;
  const percentage = Math.round((packedItemNum / itemNum) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go ✈️'
          : `You have ${itemNum} items on your list, and you already packed
        ${packedItemNum}(${percentage}%)`}
      </em>
    </footer>
  );
}
