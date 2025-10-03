import React from "react";

const routes = [
  {
    origin: "murchison-falls-safari",
    on_the_way: [
      { to: "jinja-white-nile" },
      { to: "lake-victoria" }
    ],
    closest: { to: "semuliki" }
  }
];

const AttractionsRoutes: React.FC = () => {
  return (
    <div className="space-y-4">
      {routes.map((route) => (
        <div key={route.origin} className="border p-4 rounded-lg">
          <h2 className="text-lg font-bold mb-4">{route.origin}</h2>
          
          <h3 className="font-semibold mb-2">על הדרך:</h3>
          <ul className="list-disc list-inside space-y-1">
            {route.on_the_way.map((destination, idx) => (
              <li key={idx}>{destination.to}</li>
            ))}
          </ul>
          
          <h3 className="font-semibold mt-4 mb-2">הקרוב ביותר:</h3>
          <p>{route.closest.to}</p>
        </div>
      ))}
    </div>
  );
};

export default AttractionsRoutes;