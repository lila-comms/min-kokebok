'use client';

import { useState } from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNav from '@/components/BottomNav';

export default function HandlelistePages() {
  const [portions, setPortions] = useState(2);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const categories = [
    {
      name: 'Ferskvare & Fisk',
      items: [
        { id: 'salmon', name: 'Salma laks', amount: '400g' },
        { id: 'asparagus', name: 'Grønn asparges', amount: '1 bunt' }
      ]
    },
    {
      name: 'Skafferi',
      items: [
        { id: 'miso', name: 'Hvit misopaste', amount: '2 ss' },
        { id: 'mirin', name: 'Mirin eller riseddik', amount: '1 ss' },
        { id: 'sesame', name: 'Sesamolje', amount: '1 ts' },
        { id: 'seeds', name: 'Sesamfrø ristet', amount: '1 ss' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />

      <main className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm text-on-surface-variant mb-2">Handleliste for</p>
          <h1 className="text-3xl md:text-4xl font-bold text-on-background italic mb-8">
            Miso-glasert laks med asparges
          </h1>
        </div>

        {/* Hero Image */}
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwNvVyzrUn-DFjbRTLaTPnpDMJIsU_poMEx_z7N-t9yqvFbArpcpETASqU3GiNvzVihHQL5aKMWg_BiwvC5JNpuNaO9TY6C-ooq9xG379T9PYejV6XpmslHVY9kEYrZ4blhYT4E8pRRFHBahln5gq8IV0OzNQFADSmLR5FNVbG-y05o8RNHND55ZR9av2XORbjpb5L4vjRYYBdLBZ0edWFNl443HLrpKcKqCUVD_itJYu81PyPDvH5wSOFP1RwZsIdoHYLspN7HiA"
          alt="Miso-glasert laks med asparges"
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        {/* Portion Scaler */}
        <div className="flex items-center justify-center gap-6 mb-8 bg-surface-container-low p-6 rounded-lg">
          <button
            onClick={() => setPortions(Math.max(1, portions - 1))}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          >
            −
          </button>
          <div className="text-center min-w-24">
            <p className="text-sm text-on-surface-variant">Porsjoner</p>
            <p className="text-2xl font-bold text-on-background">{portions}</p>
          </div>
          <button
            onClick={() => setPortions(portions + 1)}
            className="w-12 h-12 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
          >
            +
          </button>
        </div>

        {/* Shopping List Categories */}
        <div className="space-y-8 mb-12">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              <h2 className="text-lg font-semibold text-on-background mb-4">
                {category.name}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center gap-4 p-4 bg-surface-container rounded-lg hover:bg-surface-container-highest transition-colors cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={checkedItems[item.id] || false}
                      onChange={() => toggleItem(item.id)}
                      className="w-6 h-6 cursor-pointer"
                    />
                    <div className="flex-1">
                      <p className={`font-medium ${checkedItems[item.id] ? 'line-through text-on-surface-variant' : 'text-on-background'}`}>
                        {item.name}
                      </p>
                    </div>
                    <span className="text-on-surface-variant text-sm">{item.amount}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Chef's Tip Section */}
        <div className="border-l-4 border-primary-container bg-primary-container-lighter p-6 rounded-lg mb-8">
          <h3 className="font-semibold text-on-background mb-2">👨‍🍳 Kokktips</h3>
          <p className="text-on-surface-variant">
            Velg kvalitetslaks fra en pålitelig fiskehandler. Friskhet er nøkkelen til en herlig oppskrift. Du kan også fryse oppskriften og tine den dagen før du skal lage den.
          </p>
        </div>

        {/* Share Button */}
        <button className="w-full primary-gradient text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow">
          Send liste til meldinger
        </button>
      </main>

      <BottomNav />
    </div>
  );
}
