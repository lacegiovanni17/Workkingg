function classifier(input) {
  input.sort((a, b) => a.dob - b.dob);
  let output = input.map((student) => {
    return {
      ...student,
      age: new Date().getFullYear() - new Date(student.dob).getFullYear(),
    };
  });
  let groups = [];
  let group = [];

  output.forEach((input) => {
    if (group.length < 3) {
      group.push(input);
    } else {
      groups.push(group);
      group = [];
      group.push(input);
    }
  });

  groups.push(group);
  let result = {};
  groups.forEach((group, i) => {
    let oldest = 0;
    let sum = 0;
    let regNos = [];
    let members = [];

    group.forEach((input) => {
      if (input.age > oldest) {
        oldest = input.age;
      }
      sum += input.age;
      regNos.push(input.regNo);
      members.push(input);
    });

    result[`group${i + 1}`] = {
      members,
      oldest,
      sum,
      regNos,
    };
  });

  result.noOfGroups = groups.length;
  return result;
}

const input = [
  {
    name: 'Hendrick',
    dob: '1853-07-18T00:00:00.000Z',
    regNo: '041',
  },
  {
    name: 'Albert',
    dob: '1879-03-14T00:00:00.000Z',
    regNo: '033',
  },
  {
    name: 'Marie',
    dob: '1867-11-07T00:00:00.000Z',
    regNo: '024',
  },
  {
    name: 'Neils',
    dob: '1885-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1858-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1887-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1884-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1901-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis',
    dob: '1892-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1879-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1871-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1866-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1868-02-14T00:00:00.000Z',
    regNo: '091',
  },
];

console.log(classifier(input));

export default classifier;
