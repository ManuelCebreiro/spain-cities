import { Community, Province } from "./types";

const cities = require("../data/cities_data.json");

function getAllCities(): string[] {
  const cityFiltered = cities.flatMap((community: Community) =>
    community.provinces.flatMap((province: Province) => province.cities)
  );
  return cityFiltered;
}

function getProvincesByCommunity(community: string) {
  const communityData: Community | undefined = cities.find(
    (item: Community) => item.community === community
  );
  return communityData
    ? communityData.provinces
    : `${community} no está bien escrito o no existe`;
}

function getCitiesByProvince(province: string): string[] | undefined {
  let allCities: string[] = [];

  cities.forEach((community: Community) => {
    const targetProvince: Province | undefined = community.provinces.find(
      (prov: Province) => prov.name === province
    );

    if (targetProvince) {
      allCities = [...allCities, ...targetProvince.cities];
    }
  });
  return allCities.length > 0 ? allCities : undefined;
}

export = {
  getAllCities,
  getProvincesByCommunity,
  getCitiesByProvince,
};
