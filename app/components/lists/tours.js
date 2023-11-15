const TOURS = [
  {
    id: "tour-1",
    imgUrl:
      "https://plus.unsplash.com/premium_photo-1671363188581-d33b349e82ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG91cm8lMjBwb3J0dWdhbHxlbnwwfHwwfHx8MA%3D%3D",
    href: "/tours/peso-regua",
    title: "Peso da Regua",
    district: "Porto",
    evaluation: "4.0",

    town1: "Loule",
    town2: "Sao Clemente",
    access1:
      "Sentido A2 »» A22 – Saída 12 Loulé Centro, direção Loulé e indicação “Minas de Sal Gema",
    access2:
      "Sentido Espanha »» A22 – Saída 13 Loulé Sul, direção Loulé e indicação “Minas de Sal Gema”",
    advices:
      " Aconselha-se o uso de calçado e pode-se usar qualquer material de recolha de imagem",
    sources: "http://www.techsalt.pt/",
    isFeatured: true,
  },
];

export default TOURS;

export function getFeaturedTours() {
  return TOURS.filter((event) => event.isFeatured);
}

export function getAllTours() {
  return TOURS;
}

export function getEventById(id) {
  return TOURS.find((event) => event.id === id);
}
