import { useState } from 'react';

const Wishes = ({ id }) => {
  const [wishes, setWishes] = useState([
    {
      id: 1,
      text: "Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!",
      from: "~Your...."
    },
    {
      id: 2,
      text: "Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!",
      from: "~........"
    },
    {
      id: 3,
      text: "“Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals. Move forward with confidence and courage. You are a very special person. May today and all of your days be amazing!”",
      from: "~......."
    }
  ]);

  const [newWish, setNewWish] = useState('');

  const addWish = (e) => {
    e.preventDefault();
    if (newWish.trim()) {
      setWishes([...wishes, { id: Date.now(), text: newWish, from: 'You' }]);
      setNewWish('');
    }
  };

  return (
    <section id={id} className="wishes-section py-10 px-4 bg-pink-50">
      <div className="container max-w-3xl mx-auto">
        <h2 className="wishes-title">Birthday Wishes 💌</h2>
        <div className="wishes-grid grid grid-cols-1 gap-4">
          {wishes.map((wish) => (
            <div key={wish.id} className="wish-card p-4 bg-white shadow rounded-xl">
              <p className="wish-text text-lg italic mb-2">"{wish.text}"</p>
              <p className="wish-from text-right font-semibold text-pink-500">- {wish.from}</p>
            </div>
          ))}
        </div>
        <form onSubmit={addWish} className="wish-form mt-6 flex gap-3 items-center">
          <input
            type="text"
            value={newWish}
            onChange={(e) => setNewWish(e.target.value)}
            placeholder="Add your wish..."
            className="flex-1 border border-gray-300 rounded-xl px-4 py-2"
            required
          />
          <button
            type="submit"
            className="btn bg-pink-500 text-white px-6 py-2 rounded-xl hover:bg-pink-600 transition"
          >
            Send Wish
          </button>
        </form>
      </div>
    </section>
  );
};

export default Wishes;