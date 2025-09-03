"use client";
import { PlayerStats } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const [playerData, setPlayerData] = useState<PlayerStats[]>([]);

useEffect(() => {
  fetch("http://localhost:8080/api/stats")
    .then((res) => res.json())
    .then((data) => setPlayerData(data.data)) 
    .catch((err) => console.error("Error fetching stats:", err));
}, []);


  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Volleyball stats
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>#</th>
              <th>POS</th>
              <th>Kills</th>
              <th>HT %</th>
              <th>HTErr</th>
              <th>Digs</th>
              <th>Sets</th>
              <th>ACE</th>
              <th>Solo Blocks</th>
              <th>ERR</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(playerData) &&
              playerData.map((player: PlayerStats) => (
                <tr key={player._id}>
                  <th>{player.order}</th>
                  <td>{player.name}</td>
                  <td>{player.number}</td>
                  <td>{player.pos}</td>
                  <td>{player.kills}</td>
                  <td>{player.hittingPercent?.toFixed(2)}</td>
                  <td>{player.hittingErr}</td>
                  <td>{player.digs}</td>
                  <td>{player.sets}</td>
                  <td>{player.aces}</td>
                  <td>{player.soloblocks}</td>
                  <td>{player.err}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
