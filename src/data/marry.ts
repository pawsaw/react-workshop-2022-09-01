export interface Person {
  first: string;
  last: string;
  address: {
    city: string;
    country: string;
  };
}

export const person: Person = {
  first: 'Max',
  last: 'Mustermann',
  address: {
    city: 'Lübeck',
    country: 'Deutschland',
  },
};

function marry(person: Person, last: string, city: string): Person {
  return {
    ...person,
    last,
    address: {
      ...person.address,
      city,
    },
  };
}

const marriedPerson = marry(person, 'Musterfrau', 'Nürnberg');

function hasChanged(currPerson: Person, prevPerson: Person): boolean {
  // complexity O(n), is this possible within O(1)?
  return (
    currPerson !== prevPerson
    // currPerson.first !== prevPerson.first ||
    // currPerson.last !== prevPerson.last ||
    // currPerson.address !== prevPerson.address ||
    // currPerson.address.city !== prevPerson.address.city ||
    // currPerson.address.country !== prevPerson.address.country
  );
}
