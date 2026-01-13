import React, { useEffect, useState } from "react";
import { TeamMembersAPI } from "../../api/api"; 
// adjust path if needed

export default function OurTeamSection() {
  const [members, setMembers] = useState([]);

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

    fetchMembers();
    return () => (mounted = false);
  }, []);

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-400 text-lg md:text-2xl">
            Serving diverse industries across multiple applications
          </p>
        </div>

        {/* === TOP CEO + QUOTE SECTION (UNCHANGED DESIGN) === */}
        {members.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            {/* First Member Highlight */}
            <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#39AD63] to-[#044B9D] backdrop-blur-md rounded-3xl py-8 px-6">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
                  <img
                    src={members[0].imageUrl}
                    alt={members[0].name}
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">
                  {members[0].name}
                </h3>
                <p className="text-sm text-[#CDDBEB] mt-1">
                  {members[0].position}
                </p>
              </div>
            </div>

            {/* Quote Card */}
            <div className="lg:col-span-3 bg-gradient-to-r from-[#044B9D] to-[#05B24C] rounded-bl-3xl lg:rounded-r-3xl lg:rounded-bl-3xl px-6 md:px-10 py-10 flex items-center">
              <p className="text-white text-lg md:text-2xl leading-relaxed">
                “Our success is built on trust, consistency, and long-term
                partnerships. At Middle East Egypt, we are committed to delivering
                reliable chemical solutions that support our clients’ growth and
                strengthen the industries we serve.”
              </p>
            </div>
          </div>
        )}

        {/* === TEAM GRID SECTION === */}
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
                <h3 className="text-xl font-semibold text-white">
                  {m.name}
                </h3>
                <p className="text-sm text-[#CDDBEB] mt-1">
                  {m.position}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
