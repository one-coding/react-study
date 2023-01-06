export default function personReducer(person, action) {
  switch (action.type) {
    case "updated":
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((v) => {
          if (v.name === prev) {
            return {
              ...v,
              name: current,
            };
          }
          return v;
        }),
      };

    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((v) => v.name !== name),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name, title }],
      };
    }

    default:
      throw Error(`알수없는 액션타입 ${action.type}`);
      break;
  }
}
