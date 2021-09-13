import { useSelector } from "react-redux";
import CounterHOC, { Counter } from "../../Components/Counter/Counter";
import { userNameSelector } from "../../Store/Profile/selectors";

export const Chats = () => {
  const userName = useSelector(userNameSelector);

  return (
    <>
      <Counter qwerty />
      <CounterHOC />
      {userName}
    </>
  );
};
