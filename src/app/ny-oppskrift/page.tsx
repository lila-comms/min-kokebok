'use client';

import { useState } from 'react';
import TopAppBar from '@/components/TopAppBar';
import BottomNav from '@/components/BottomNav';

export default function NyOppskriftPage() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    tags: '',
    ingredients: '',
    instructions: '',
    time: '',
    portions: '',
    notes: '',
    isFavorite: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Oppskrift lagret:', formData);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-on-surface-variant mb-2">Ny Oppskrift</p>
          <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-4">
            Skap din neste kulinariske skatt
          </h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="md:col-span-7">
              {/* Title */}
              <div className="mb-6">
                <label htmlFor="title" className="block text-sm font-semibold text-on-background mb-2">
                  Oppskrift navn
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="f.eks. Klassisk Margherita Pizza"
                  className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary"
                />
              </div>

              {/* Category and Tags */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-on-background mb-2">
                    Kategori
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background focus:outline-none focus:border-primary"
                  >
                    <option value="">Velg kategori</option>
                    <option value="forrett">Forrett</option>
                    <option value="hovedrett">Hovedrett</option>
                    <option value="dessert">Dessert</option>
                    <option value="bakst">Bakst</option>
                    <option value="drikke">Drikke</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="tags" className="block text-sm font-semibold text-on-background mb-2">
                    Merkelapper
                  </label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="vegetar, glutenfri, ..."
                    className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Ingredients */}
              <div className="mb-6">
                <label htmlFor="ingredients" className="block text-sm font-semibold text-on-background mb-2">
                  Ingredienser
                </label>
                <div className="bg-surface-container-low rounded-lg p-4">
                  <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleInputChange}
                    placeholder="En ingrediens per linje&#10;f.eks. 2 egg&#10;100g sukker&#10;50g smør"
                    rows={6}
                    className="w-full bg-transparent text-on-background placeholder-on-surface-variant focus:outline-none resize-none"
                  />
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-6">
                <label htmlFor="instructions" className="block text-sm font-semibold text-on-background mb-2">
                  Fremgangsmåte
                </label>
                <textarea
                  id="instructions"
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleInputChange}
                  placeholder="Beskriv trinn for trinn hvordan du lager oppskriften..."
                  rows={8}
                  className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-5">
              {/* Image Upload */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-on-background mb-2">
                  Bilde
                </label>
                <div className="w-full aspect-square border-2 border-dashed border-outline rounded-lg flex items-center justify-center bg-surface-container-low hover:bg-surface-container-highest transition-colors cursor-pointer">
                  <div className="text-center">
                    <div className="text-4xl text-outline mb-2">📷</div>
                    <p className="text-sm text-on-surface-variant">Klikk for å laste opp bilde</p>
                  </div>
                </div>
              </div>

              {/* Time and Portions */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="time" className="block text-sm font-semibold text-on-background mb-2">
                    Tid (minutter)
                  </label>
                  <input
                    type="number"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    placeholder="30"
                    className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label htmlFor="portions" className="block text-sm font-semibold text-on-background mb-2">
                    Porsjoner
                  </label>
                  <input
                    type="number"
                    id="portions"
                    name="portions"
                    value={formData.portions}
                    onChange={handleInputChange}
                    placeholder="2"
                    className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              {/* Notes */}
              <div className="mb-6">
                <label htmlFor="notes" className="block text-sm font-semibold text-on-background mb-2">
                  Notater & Tips
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  placeholder="Personlige tips og variasjoner..."
                  rows={5}
                  className="w-full px-4 py-3 bg-surface-container border border-outline rounded-lg text-on-background placeholder-on-surface-variant focus:outline-none focus:border-primary resize-none"
                />
              </div>

              {/* Favorite Toggle */}
              <div className="mb-8 flex items-center gap-3 bg-surface-container-low p-4 rounded-lg">
                <input
                  type="checkbox"
                  id="favorite"
                  name="isFavorite"
                  checked={formData.isFavorite}
                  onChange={handleInputChange}
                  className="w-5 h-5 cursor-pointer"
                />
                <label htmlFor="favorite" className="text-on-background font-medium cursor-pointer">
                  Legg til som favoritt
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full primary-gradient text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Lagre Oppskrift
              </button>
            </div>
          </div>
        </form>

        {/* Decorative Quote Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-12 border-t border-outline">
          <div>
            <p className="text-xl md:text-2xl italic text-on-background leading-relaxed">
              "Cooking is like love. It should be entered into with abandon or not at all."
            </p>
            <p className="text-on-surface-variant mt-4">— Harriet Van Horne</p>
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfIHUWphldzDwkguaMAE_MyCNITiv2lmxAx_8QABxj-TG-F8zjjEfRZtLwypGvGxeBl1h4C0E9B4M63uf-bbqyL0mAc1d1cQ1LEk_YYgAO2R9l8-H2AVKMl0IKYhiGLLjHVty_fagj4RswI-24lXEB-Ft3CP6hsbDY362sfClV5wtFv8REv0N-aNyGSj5cu7rZ9MSPb-pG44NCf7YA-XbGLJGMI0SWZjw207SkUOwrdoaTuLIFe1j4tP6KmuDUWhwNeT1i7bZX6ys"
            alt="Decorative cooking image"
            className="w-full h-64 object-cover rounded-lg"
          />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
