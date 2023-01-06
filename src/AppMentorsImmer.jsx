import React, { useReducer, useState } from "react";
import { useImmer } from "use-immer";

export default function AppMentor() {
  const [person, updatePerson] = useImmer(initialValue);
  const handleUpdate = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((v) => v.name === prev);
      mentor.name = current;
    });
  };
  const handleDelete = () => {
    const name = prompt(`누구를 삭제하고 싶은가요?`);

    updatePerson((person) => {
      const idx = person.mentors.findIndex((v) => v.name === name);

      person.mentors.splice(idx, 1);
    });
  };
  const handleAdd = () => {
    const name = prompt(`추가할 멘토 이름을 적으세요`);
    const title = prompt(`추가할 멘토 직함을 적으세요`);

    // person.mentors.push({ name, title });
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button onClick={handleDelete}>멘토 삭제하기</button>
      <button onClick={handleAdd}>멘토의 추가하기</button>
    </div>
  );
}

const initialValue = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
