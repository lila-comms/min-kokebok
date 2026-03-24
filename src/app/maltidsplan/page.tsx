'use client';

import TopAppBar from '@/components/TopAppBar';
import BottomNav from '@/components/BottomNav';

export default function MåltidsplanPage() {
  const days = [
    {
      name: 'Mandag',
      date: '14 Okt',
      recipe: {
        title: 'Miso-glasert laks',
        time: '25 min',
        portions: '2 porsjoner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmg2YgLEZOKl-wB5bWoBWjsxHHtvZK9TLwXqG0G5iIKA6ku0AsVQEs56-iNP0SgtE6H7PNMOa1BiObN2BXGLdlOlD5_iu5IBuQhjdPW1UCRolAWx4Py1HxlzQgCOI2_ypgpAXtC7V62YyEf_RqjoWHhIWulQgVA-E0TdvCYWgWyK40eV-cm56Uu03JDK0oSz_dXklFXF0gbevVVEuW96FhAFAwayqxkv9-_wZUyrPfilstEM0Zms_6YCK9J-tGHJNU37_Bjo6gqrQ'
      }
    },
    {
      name: 'Tirsdag',
      date: '15 Okt',
      recipe: null
    },
    {
      name: 'Onsdag',
      date: '16 Okt',
      recipe: {
        title: 'Høstsalat med rødbeter & chèvre',
        time: '15 min',
        portions: '2 porsjoner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_X4CGcpl8ilN-l0cuCIJFadyRFEGCweuwf_a46kD_cwVy672wguqcOLPl-9rSSv_EpHhZKI7pjjTU-hR3-qw3pIy3fs22K1rx_6_3WAXZlCdFa2ZNyFoB487fUNZC5uwTCx90q97NjhQwNnNRQBqhso8W0iz8jEG1o6wd-Srke-0EvKooAL3QRtAWyrI5MAdWUDhD0FQHQene7_YIPjRtzmblo_W0jsq4d8G6_Y7OAvahTnZX8zqdQ7_L3MHyEO_WIyLRHP4n-ag'
      }
    },
    {
      name: 'Torsdag',
      date: '17 Okt',
      recipe: null
    },
    {
      name: 'Fredag',
      date: '18 Okt',
      recipe: {
        title: 'Napolitansk surdeigspizza',
        time: '24 timer',
        portions: '4 porsjoner',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxeGbirBCn55xOzs8MXV3kiOMmZmeJgMNzWzLZN-wpL7sH-q_iz72NMajs_027x5eismncVPACtRBf7M2qAklDsdQbAeaVqYcCtJAgww2E4MF5PQSSsSSZzNQFbIEmUhTghUms8dOw26U3lRimyeuwVEOaTNfarlpe-55vGvi0qDNrTfsgTYSMzy0_47gSYL-tet3h-2bU-KmuXGBFckFCogeFQ00hkhYrMgY46Tow1iE6-2AUwaLHGYUaSXCn9Rk1RiwH8PrM7xs'
      }
    },
    {
      name: 'Lørdag',
      date: '19 Okt',
      recipe: null
    },
    {
      name: 'Søndag',
      date: '20 Okt',
      recipe: null
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <TopAppBar />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-on-surface-variant mb-2">Uke 42</p>
          <h1 className="text-4xl md:text-5xl font-bold text-on-background mb-4">
            Måltidsplan
          </h1>
          <p className="text-lg text-on-surface-variant italic">
            "Det er ikke påstanden, men forberedelsen som gjør en god kokk." — Jacques Pépin
          </p>
        </div>

        {/* 7 Day Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {days.map((day, index) => (
            <div
              key={index}
              className="editorial-shadow rounded-lg overflow-hidden bg-surface hover:shadow-lg transition-shadow"
            >
              {/* Day Header */}
              <div className="bg-surface-variant px-4 py-3">
                <h3 className="font-semibold text-on-surface">{day.name}</h3>
                <p className="text-sm text-on-surface-variant">{day.date}</p>
              </div>

              {/* Card Content */}
              <div className="p-4">
                {day.recipe ? (
                  <div>
                    <img
                      src={day.recipe.image}
                      alt={day.recipe.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-on-surface mb-2 line-clamp-2">
                      {day.recipe.title}
                    </h4>
                    <div className="flex justify-between text-xs text-on-surface-variant">
                      <span>{day.recipe.time}</span>
                      <span>{day.recipe.portions}</span>
                    </div>
                  </div>
                ) : (
                  <button className="w-full py-8 border-2 border-dashed border-outline rounded-lg text-outline hover:bg-surface-container-highest transition-colors">
                    <span className="text-2xl">+</span>
                    <p className="text-sm mt-1">Legg til</p>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Generate Shopping List CTA */}
        <div className="flex justify-center">
          <button className="primary-gradient text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow">
            Generer handleliste fra uken
          </button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
