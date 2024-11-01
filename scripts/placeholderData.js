const dummyProperties = [
  {
    id: "1",
    slug: "cozy-downtown-apartment",
    propertyTitle: "Cozy Downtown Apartment",
    status: "sale",
    type: "apartment",
    price: 500,
    area: 850.0,
    rooms: 2,
    bathrooms: 1,
    imagesUrl: [
      "https://storage.googleapis.com/theme-vessel-items/checking-sites/housy-html/HTML/img/properties/properties-1.jpg",
      "https://storage.googleapis.com/theme-vessel-items/checking-sites/housy-html/HTML/img/properties/properties-3.jpg",
    ],
    address: "123 Main St",
    city: "San Francisco",
    state: "CA",
    details:
      "A cozy apartment located in the heart of downtown, close to shops and public transport.",
    buildingAge: 10,
    bedrooms: 2,

    hasParking: true,
    hasSwimmingPool: false,
    hasLaundryRoom: true,
    hasWoodenCeiling: false,
    hasCentralHeating: true,
    hasAlarm: false,
    contactName: "John Doe",
    contactEmail: "john.doe@example.com",
    contactPhone: "555-1234",
  },
  {
    id: "2",
    slug: "luxury-condo-with-sea-view",
    propertyTitle: "Luxury Condo with Sea View",
    status: "rent",
    type: "houses",
    area: 1500.0,
    price: 400,
    rooms: 3,
    bathrooms: 2,
    imagesUrl: [
      "https://storage.googleapis.com/theme-vessel-items/checking-sites/housy-html/HTML/img/properties/properties-4.jpg",
      "https://storage.googleapis.com/theme-vessel-items/checking-sites/housy-html/HTML/img/properties/properties-5.jpg",
    ],
    address: "456 Ocean Blvd",
    city: "Miami",
    state: "FL",
    details:
      "Spacious luxury condo with a beautiful sea view, located in an exclusive area.",
    buildingAge: 5,
    bedrooms: 3,

    hasParking: true,
    hasSwimmingPool: true,
    hasLaundryRoom: true,
    hasWoodenCeiling: false,
    hasCentralHeating: true,
    hasAlarm: true,
    contactName: "Alice Smith",
    contactEmail: "alice.smith@example.com",
    contactPhone: "555-5678",
  },
  {
    id: "3",
    slug: "modern-family-home",
    propertyTitle: "Modern Family Home",
    status: "sale",
    type: "houses",
    area: 2000.0,
    price: 300,
    rooms: 4,
    bathrooms: 3,
    imagesUrl: [
      "https://storage.googleapis.com/theme-vessel-items/checking-sites/housy-html/HTML/img/properties/properties-2.jpg",
      "https://storage.googleapis.com/theme-vessel-items/checking-sites/housy-html/HTML/img/properties/properties-5.jpg",
    ],
    address: "789 Maple Ave",
    city: "Austin",
    state: "TX",
    details: "A modern family home with a spacious yard and open layout.",
    buildingAge: 2,
    bedrooms: 4,

    hasParking: true,
    hasSwimmingPool: false,
    hasLaundryRoom: true,
    hasWoodenCeiling: true,
    hasCentralHeating: true,
    hasAlarm: true,
    contactName: "Michael Johnson",
    contactEmail: "michael.johnson@example.com",
    contactPhone: "555-9012",
  },
];

module.exports = { dummyProperties };
