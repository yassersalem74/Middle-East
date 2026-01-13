import React, { useEffect, useState } from "react";
import { TeamMembersAPI } from "../../api/api";

export default function OurTeamAboutSection() {
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
    <section aria-labelledby="about-team-heading" className="py-24 text-white">
      
      {/* Heading */}
      <h2 id="about-team-heading" className="text-4xl text-center font-bold mb-4">
        Meet Our Team
      </h2>

      <p className="text-[#B4C9E2] text-xl text-center mb-12">
        Serving diverse industries across multiple applications
      </p>

      <div className="py-6 flex justify-center flex-wrap gap-12">
        {members.map((m) => (
          <article
            key={m.id}
            className="flex flex-col w-[250px] h-[340px] items-center justify-center gap-4
            opacity-80 hover:opacity-100
            bg-gradient-to-b from-[#FFFFFF] via-[#8098C1] via-[#4065A2] to-[#003183]
            backdrop-blur-md rounded-3xl px-6"
          >
            <div className="w-32 h-32 rounded-full border-4 border-emerald-400 flex items-center justify-center">
              <img
                src={m.imageUrl}
                alt={m.name}
                width="112"
                height="112"
                loading="lazy"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-white">
                {m.name}
              </h3>
              <p className="text-sm text-[#CDDBEB] mt-1">
                {m.position}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
