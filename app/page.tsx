"use client";
import { PlayerStats } from "@/types/types";
import { use, useState } from "react";

export default function Home() {
  const [playerData, setPlayerData] = useState([]);

  use(
    fetch("http://localhost:8080/api/stats")
      .then((res) => res.json())
      .then((data) => setPlayerData(data))
  );

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      Volleyball stats
      <div className="overflow-x-auto">
        {playerData.map((player: PlayerStats) => (
        
        ))}
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
              <th>Digs</th>
              <th>ACE</th>
              <th>Sets</th>
              <th>Solo Blocks</th>
              <th>ERR</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>12</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>24</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
              <th>3</th>
              <td>Brice Swyre</td>
              <td>8</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
