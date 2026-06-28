import React, { useEffect, useState } from "react";
import { CeosAPI, TeamMembersAPI } from "../../api/api";

export default function OurTeamSection() {
  const [members, setMembers] = useState([]);
  const [ceo, setCeo] = useState(null);

  useEffect(() => {
    let mounted = true;

    const fetchMembers = async () => {
      try {
        const res = await TeamMembersAPI.getAll();
        if (mounted) setMembers(res.data);
      } catch {
        // silent
      }
    };

    const fetchCeo = async () => {
      try {
        const res = await CeosAPI.getAll();
        if (mounted) setCeo(res.data?.[0] ?? null);
      } catch {
        // silent
      }
    };

    fetchMembers();
    fetchCeo();
    return () => (mounted = false);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl">
            Serving diverse industries across multiple applications
          </p>
        </div>

        {ceo && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#39AD63] to-[#044B9D] backdrop-blur-md rounded-3xl py-8 px-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                  <img
                    src={ceo.imageUrl}
                    alt={ceo.name}
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  {ceo.name}
                </h3>
                <p className="text-sm text-[#CDDBEB] mt-1">{ceo.title}</p>
              </div>
            </div>

            <div className="lg:col-span-3 bg-gradient-to-r from-[#044B9D] to-[#05B24C] rounded-bl-3xl lg:rounded-r-3xl lg:rounded-bl-3xl px-6 md:px-10 py-10 flex items-center">
              <p className="text-white text-lg md:text-2xl leading-relaxed">
                "{ceo.bio}"
              </p>
            </div>
          </div>
        )}

        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.id}
              className="flex flex-col items-center justify-center gap-4
              bg-gradient-to-b from-[#b5b4b4] via-[#8098C1] via-[#4065A2] to-[#003183]
              backdrop-blur-md rounded-3xl py-8 px-6"
            >
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                  <img
                    src={m.imageUrl}
                    alt={m.name}
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{m.name}</h3>
                <p className="text-sm text-[#CDDBEB] mt-1">{m.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
