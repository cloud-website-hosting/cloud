import React, { useState, useEffect } from 'react';
import competitiveData from '../data/competitive-maps.json';
import { trackLeadMagnet } from '../services/analytics';

const CompetitiveMap = ({ citySlug, cityName }) => {
  const [selectedCompetitor, setSelectedCompetitor] = useState(null);
  const [email, setEmail] = useState('');
  const [submitted, setEmailSubmitted] = useState(false);

  const cityMapData = competitiveData.find(c => c.slug === citySlug);

  useEffect(() => {
    trackLeadMagnet('competitive_map', 'view', { city_slug: citySlug });
  }, [citySlug]);

  if (!cityMapData) {
    return (
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 text-center">
        <div className="mb-6 inline-block bg-blue-500/20 p-4 rounded-full">
          <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold mb-4">Local Map Coming Soon to {cityName}</h3>
        <p className="text-slate-400 text-lg mb-8 max-w-lg mx-auto">
          Our team is currently researching the competitive landscape for {cityName}. 
          Join the waitlist to be notified when the interactive map is live.
        </p>
        <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3" onSubmit={(e) => { 
          e.preventDefault(); 
          trackLeadMagnet('competitive_map_waitlist', 'submit', { city_slug: citySlug });
          setEmailSubmitted(true); 
        }}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            required
            className="flex-grow bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-blue-600 hover:bg-blue-700 font-bold px-6 py-3 rounded-xl transition-all whitespace-nowrap">
            {submitted ? 'Joined!' : 'Notify Me'}
          </button>
        </form>
      </div>
    );
  }

  const handlePinClick = (comp) => {
    trackLeadMagnet('competitive_map', 'interaction', { 
      action_type: 'pin_click',
      competitor_name: comp.name,
      competitor_rank: comp.rank
    });
    setSelectedCompetitor(comp);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
      <div className="p-6 md:p-8 bg-slate-800/50 border-b border-slate-700">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Interactive Competitive Map: {cityMapData.name}</h3>
        <p className="text-slate-400">Click a pin to see ranking factors for top {cityMapData.niche} in your city.</p>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Map Area */}
        <div className="lg:w-2/3 relative bg-slate-950 min-h-[400px] overflow-hidden group">
          {/* Simulated Map Grid/Pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none" 
               style={{backgroundImage: 'radial-gradient(#334155 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
          
          {/* Legend */}
          <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-slate-900/80 backdrop-blur-sm p-3 rounded-lg border border-slate-700 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
              <span>#1 Leader</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-slate-300 shadow-[0_0_8px_rgba(203,213,225,0.5)]"></div>
              <span>#2 Competitor</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-amber-700 shadow-[0_0_8px_rgba(180,83,9,0.5)]"></div>
              <span>#3+ Competitors</span>
            </div>
          </div>

          {/* Competitor Pins (Simulated positions based on jittered city center) */}
          <div className="absolute inset-0">
            {cityMapData.competitors.map((comp) => {
              // Normalize lat/lng to a percentage for visual mapping
              // For a real app, we'd use a library. Here we'll use a fixed mapping range based on the city center.
              const top = 50 + (cityMapData.lat - comp.lat) * 200; 
              const left = 50 + (comp.lng - cityMapData.lng) * 200;

              const pinColor = comp.rank === 1 ? 'bg-yellow-500' : comp.rank === 2 ? 'bg-slate-300' : 'bg-amber-700';

              return (
                <button
                  key={comp.rank}
                  onClick={() => handlePinClick(comp)}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group/pin z-20 transition-all hover:scale-110"
                  style={{ top: `${top}%`, left: `${left}%` }}
                >
                  <div className={`w-8 h-8 rounded-full ${pinColor} flex items-center justify-center border-4 border-slate-900 shadow-xl relative`}>
                    <span className="text-slate-900 text-xs font-black">{comp.rank}</span>
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-900"></div>
                  </div>
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover/pin:block bg-slate-900 border border-slate-700 rounded p-2 text-[10px] whitespace-nowrap shadow-2xl z-30">
                    <p className="font-bold">{comp.name}</p>
                    <p className="text-slate-400">{comp.reviews} reviews • {comp.rating}★</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* City Label */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none">
            <h4 className="text-4xl font-black text-white/10 uppercase tracking-[0.2em]">{cityMapData.name}</h4>
          </div>
        </div>

        {/* Info Area */}
        <div className="lg:w-1/3 bg-slate-900 p-6 md:p-8 flex flex-col border-l border-slate-800">
          {!selectedCompetitor ? (
            <div className="flex-grow flex flex-col justify-center text-center py-12">
              <div className="mb-4 text-blue-500">
                <svg className="w-16 h-16 mx-auto opacity-20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Select a Competitor</h4>
              <p className="text-slate-500">Discover the metrics that keep these businesses at the top of the Google Local Pack.</p>
            </div>
          ) : (
            <div className="flex-grow space-y-6 animate-fadeIn">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded ${
                    selectedCompetitor.rank === 1 ? 'bg-yellow-500/20 text-yellow-500' : 'bg-slate-700 text-slate-400'
                  }`}>
                    Rank #{selectedCompetitor.rank} in {cityMapData.name}
                  </span>
                  <button onClick={() => setSelectedCompetitor(null)} className="text-slate-500 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <h4 className="text-2xl font-bold leading-tight">{selectedCompetitor.name}</h4>
                <a href={`https://${selectedCompetitor.url}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm hover:underline">{selectedCompetitor.url}</a>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Reviews</p>
                  <p className="text-xl font-bold text-white">{selectedCompetitor.reviews}</p>
                </div>
                <div className="bg-slate-800/50 p-3 rounded-xl border border-slate-700/50 text-center">
                  <p className="text-[10px] text-slate-400 uppercase font-bold mb-1">Rating</p>
                  <p className="text-xl font-bold text-blue-400">{selectedCompetitor.rating}★</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-slate-400 uppercase font-bold mb-2 tracking-wide">Key Strength</p>
                <div className="bg-blue-900/20 border border-blue-800/30 p-4 rounded-xl text-blue-100 text-sm italic">
                  "{selectedCompetitor.keyStrength}"
                </div>
              </div>

              {selectedCompetitor.rank === 1 && (
                <div className="p-4 bg-slate-800/80 rounded-xl border-l-4 border-yellow-500">
                  <h5 className="text-yellow-500 font-bold text-sm mb-1 uppercase tracking-wider">Gap Analysis</h5>
                  <p className="text-sm text-slate-300">To pass this leader, you need <span className="text-white font-bold">{cityMapData.gapAnalysis.reviewsNeeded}+</span> reviews and a <span className="text-white font-bold">{cityMapData.gapAnalysis.ratingTarget}★</span> rating.</p>
                  <p className="text-xs text-slate-400 mt-2 font-medium">Strategy: {cityMapData.gapAnalysis.topRecommendation}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 pt-8 border-t border-slate-800">
            <h5 className="font-bold text-sm mb-4">Want the full {cityMapData.name} report?</h5>
            <form onSubmit={(e) => { 
              e.preventDefault(); 
              trackLeadMagnet('competitive_map', 'submit', { city_slug: citySlug });
              setEmailSubmitted(true); 
            }} className="space-y-3">
              <input 
                type="email" 
                placeholder="Work Email" 
                required
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 font-bold py-2 rounded-lg text-sm transition-all shadow-lg shadow-blue-900/20">
                {submitted ? 'Report Sent!' : 'Send Me the Report'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitiveMap;
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
/home/engine/.bashrc: line 1: syntax error near unexpected token `('
/home/engine/.bashrc: line 1: `. /etc/profile.d/workload-containment.shn# ~/.bashrc: executed by bash(1) for non-login shells.'
