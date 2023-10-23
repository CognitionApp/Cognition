import React from "react";

const SidebarListItem = ({ id, question, answer }) => {
  return (
    <li data-id={id} data-answer={answer}>{question}</li>
  );
};

export default SidebarListItem;
