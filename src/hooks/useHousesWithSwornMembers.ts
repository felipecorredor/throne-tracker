const fetchHousesWithSwornMembers = async (): Promise<Array<NobleHouse>> => {
  const response = await fetch(
    "https://anapioficeandfire.com/api/houses?page=1&pageSize=10"
  );

  if (!response.ok) {
    throw new Error("Error al obtener las casas");
  }

  const houses = (await response.json()) as Array<HouseInfo>;

  const houseDetails: Array<NobleHouse> = await Promise.all(
    houses.map(async (house: HouseInfo) => {
      const swornMembers = await Promise.all(
        house.swornMembers.map(async (url: string) => {
          const memberResponse = await fetch(url);

          if (!memberResponse.ok) {
            throw new Error("Error al obtener el miembro");
          }

          const member = (await memberResponse.json()) as LoyalMember;

          return {
            name: member.name,
            isAlive: !member.died,
            deathInfo: member.died || null,
          } as SwornMemberInfo;
        })
      );

      return {
        name: house.name,
        swornMembers:
          swornMembers.length > 0
            ? swornMembers
            : "Esta casa no tiene miembros juramentados",
      } as NobleHouse;
    })
  );

  return houseDetails as Array<NobleHouse>;
};

export { fetchHousesWithSwornMembers };
